# Test Plan: The Internet - Checkboxes Page

| Field | Value |
|-------|-------|
| **Version** | 1.0 |
| **Author** | Copilot CLI |
| **Date** | 2026-07-31 |
| **Environment** | Staging / Demo |
| **Browser** | Chromium (Playwright) |

---

## 1. Introduction

This document defines the test scope and test scenarios for the checkboxes page available at https://the-internet.herokuapp.com/checkboxes. The purpose is to validate that the page displays the expected checkbox controls and that user interactions behave correctly.

## 2. Objectives

- Verify that the page loads successfully and displays the checkboxes UI.
- Confirm that each checkbox can be selected and deselected independently.
- Validate that the initial state of the checkboxes is correct.
- Provide a clear test basis for future automation using Playwright.

## 3. Scope

### In Scope

- Page loading and rendering of the checkboxes page.
- Display of two checkbox controls with correct labels.
- Initial checkbox state (first checkbox unchecked, second checkbox checked).
- User interaction to check/uncheck each checkbox.
- Basic validation of page title and visible content.

### Out of Scope

- Backend/API behavior.
- Authentication, sessions, or user account features.
- Cross-browser compatibility beyond the planned Playwright test environment.
- Performance, accessibility, or visual regression testing.

## 4. Test Strategy

### Test Approach

- Automation Tool: Playwright with @playwright/test
- Test Type: Functional end-to-end UI testing
- Browser: Chromium
- Environment: The Internet Heroku app

### Test Levels

- Smoke Testing: Verify page loads and key elements are present.
- Functional Testing: Verify checkbox selection and deselection behavior.
- Negative Testing: Verify no unexpected state changes occur when interacting with the checkboxes.

## 5. Test Environment

| Component | Details |
|-----------|---------|
| Application URL | https://the-internet.herokuapp.com/checkboxes |
| Browser | Chromium |
| OS | Windows / Cross-platform |
| Framework | Playwright v1.58+ |
| Reporter | HTML + JSON |

## 6. Test Scenarios

### TC-01: Page loads successfully
- **Precondition:** The browser is opened and the internet connection is available.
- **Steps:**
  1. Navigate to https://the-internet.herokuapp.com/checkboxes.
  2. Observe the page content.
- **Expected Result:**
  - The page loads without errors.
  - The page title is "The Internet".
  - The heading "Checkboxes" is visible.

### TC-02: Two checkboxes are displayed with correct labels
- **Precondition:** The checkboxes page is open.
- **Steps:**
  1. Locate the checkbox controls on the page.
  2. Read the visible labels.
- **Expected Result:**
  - Two checkboxes are displayed.
  - Labels read "checkbox 1" and "checkbox 2".

### TC-03: Initial checkbox states are correct
- **Precondition:** The checkboxes page is open.
- **Steps:**
  1. Inspect the state of each checkbox.
- **Expected Result:**
  - "checkbox 1" is unchecked by default.
  - "checkbox 2" is checked by default.

### TC-04: First checkbox can be selected
- **Precondition:** The checkboxes page is open.
- **Steps:**
  1. Click on the first checkbox.
- **Expected Result:**
  - The first checkbox becomes checked.
  - The second checkbox remains checked.

### TC-05: First checkbox can be deselected
- **Precondition:** The first checkbox is currently checked.
- **Steps:**
  1. Click on the first checkbox again.
- **Expected Result:**
  - The first checkbox becomes unchecked.
  - The second checkbox remains checked.

### TC-06: Second checkbox can be deselected
- **Precondition:** The checkboxes page is open.
- **Steps:**
  1. Click on the second checkbox.
- **Expected Result:**
  - The second checkbox becomes unchecked.
  - The first checkbox remains unchecked.

### TC-07: Second checkbox can be re-selected
- **Precondition:** The second checkbox is currently unchecked.
- **Steps:**
  1. Click on the second checkbox again.
- **Expected Result:**
  - The second checkbox becomes checked again.
  - The first checkbox remains unchecked.

## 7. Entry Criteria

- The application is available and reachable.
- The Playwright environment is installed and configured.
- Test data is not required for this page.

## 8. Exit Criteria

- All planned scenarios are reviewed and executed.
- No blocking issues are found during initial validation.
- The test plan is ready for automation implementation.
