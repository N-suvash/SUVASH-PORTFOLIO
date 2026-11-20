/**
 * ==============================================================================
 * Google Apps Script for SUVASH's Developer Portfolio Contact Form
 * Project URL: https://script.google.com/u/0/home/projects/1eWb7l40Ri2ZHe78Fnjk_T2UqpNa2y9kAf9PcMbozDVE0UeHcrDfNUdYy/edit
 * ==============================================================================
 * 
 * INSTRUCTIONS:
 * 1. Open your Apps Script project at the link above.
 * 2. Delete all existing code in Code.gs and replace it with this entire script.
 * 3. (Optional) If you want inquiries saved to a specific Google Sheet:
 *    - Create a Google Sheet and copy its ID from the URL (between /d/ and /edit).
 *    - Paste it into SPREADSHEET_ID below (or leave blank to create one automatically).
 * 4. In the top toolbar, select function "setupSheet" and click "Run" once to create headers.
 * 5. Click "Deploy" > "New deployment":
 *    - Click the Gear icon ⚙️ > Select "Web app"
 *    - Description: "SUVASH Portfolio Contact Webhook"
 *    - Execute as: "Me" (your Google account)
 *    - Who has access: "Anyone" (IMPORTANT: select Anyone so website visitors can submit)
 * 6. Click "Deploy", click "Authorize access", and copy your Web App URL (ends in /exec).
 * 7. Paste that Web App URL into your React Contact form.
 */

// SUVASH's email to receive instant message notifications
const NOTIFICATION_EMAIL = "suvashsanthosh@gmail.com";

// Optional: Set your Google Sheet ID here, or leave empty to auto-create "SUVASH Portfolio Inquiries"
let SPREADSHEET_ID = ""; 

function getOrCreateSheet() {
  let ss;
  if (SPREADSHEET_ID && SPREADSHEET_ID.trim() !== "") {
    try {
      ss = SpreadsheetApp.openById(SPREADSHEET_ID.trim());
    } catch (e) {
      Logger.log("Could not open sheet by ID, falling back to active or new sheet: " + e.toString());
    }
  }

  if (!ss) {
    try {
      ss = SpreadsheetApp.getActiveSpreadsheet();
    } catch (e) {
      ss = null;
    }
  }

  if (!ss) {
    // Check if we previously stored a sheet ID
    const userProperties = PropertiesService.getUserProperties();
    const savedId = userProperties.getProperty("PORTFOLIO_SHEET_ID");
    if (savedId) {
      try {
        ss = SpreadsheetApp.openById(savedId);
      } catch (e) {}
    }

    if (!ss) {
      ss = SpreadsheetApp.create("SUVASH Portfolio Inquiries");
      userProperties.setProperty("PORTFOLIO_SHEET_ID", ss.getId());
      Logger.log("Created new Google Sheet for inquiries: " + ss.getUrl());
    }
  }

  let sheet = ss.getSheetByName("Inquiries");
  if (!sheet) {
    sheet = ss.getActiveSheet();
    sheet.setName("Inquiries");
  }

  return sheet;
}

// Run this once inside Apps Script toolbar to setup professional headers
function setupSheet() {
  const sheet = getOrCreateSheet();
  const headers = ["Timestamp (IST)", "Full Name", "Email Address", "Subject", "Message", "Status"];
  
  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);

  // Style header row in SUVASH Dark Navy / Purple theme
  const headerRange = sheet.getRange(1, 1, 1, headers.length);
  headerRange.setFontWeight("bold");
  headerRange.setFontSize(11);
  headerRange.setBackground("#070d24");
  headerRange.setFontColor("#c084fc");
  headerRange.setHorizontalAlignment("center");
  
  sheet.setFrozenRows(1);
  
  sheet.setColumnWidth(1, 180); // Timestamp
  sheet.setColumnWidth(2, 180); // Name
  sheet.setColumnWidth(3, 220); // Email
  sheet.setColumnWidth(4, 200); // Subject
  sheet.setColumnWidth(5, 380); // Message
  sheet.setColumnWidth(6, 140); // Status
  
  Logger.log("Headers configured successfully! Sheet URL: " + sheet.getParent().getUrl());
}

// Handles incoming POST submissions from the portfolio contact form
function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.tryLock(10000); // Wait up to 10s for concurrency lock

  try {
    const sheet = getOrCreateSheet();

    let data;
    if (e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (jsonErr) {
        data = e.parameter || {};
      }
    } else {
      data = e.parameter || {};
    }

    const timestamp = Utilities.formatDate(new Date(), "Asia/Kolkata", "yyyy-MM-dd HH:mm:ss");
    const name = data.name || "N/A";
    const email = data.email || "N/A";
    const subject = data.subject || "No Subject";
    const message = data.message || "No Message";

    // Append inquiry row to Google Sheet
    sheet.appendRow([timestamp, name, email, subject, message, "New Inquiry"]);

    // Send instant email alert to SUVASH
    try {
      MailApp.sendEmail({
        to: NOTIFICATION_EMAIL,
        subject: `[Portfolio Website] ${subject} from ${name}`,
        body: `Hello SUVASH,\n\nYou have received a new contact message from your portfolio website!\n\n` +
              `👤 Name: ${name}\n` +
              `📧 Email: ${email}\n` +
              `📌 Subject: ${subject}\n\n` +
              `💬 Message:\n${message}\n\n` +
              `⏰ Time: ${timestamp} (IST)\n` +
              `📊 View Google Sheet: ${sheet.getParent().getUrl()}`
      });
    } catch (mailErr) {
      Logger.log("Mail notification warning: " + mailErr.toString());
    }

    return ContentService
      .createTextOutput(JSON.stringify({ 
        result: "success", 
        message: "Your message was recorded and sent to SUVASH successfully!" 
      }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ 
        result: "error", 
        error: error.toString() 
      }))
      .setMimeType(ContentService.MimeType.JSON);

  } finally {
    lock.releaseLock();
  }
}

// Health check GET endpoint
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({
      status: "connected",
      owner: "SUVASH",
      service: "Portfolio Contact Webhook",
      timestamp: new Date().toISOString()
    }))
    .setMimeType(ContentService.MimeType.JSON);
}

