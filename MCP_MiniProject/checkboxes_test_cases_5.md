# Test Cases: The Internet - Checkboxes Page

| Field | Value |
|-------|-------|
| **Version** | 1.0 |
| **Author** | Copilot CLI |
| **Date** | 2026-07-31 |
| **Total Test Cases** | 5 |

---

## Test Case Format

| Field | Description |
|-------|-------------|
| **TC ID** | Unique identifier (TC-001, TC-002, ...) |
| **Title** | Brief description of what is tested |
| **Preconditions** | What must be true before the test |
| **Steps** | Step-by-step instructions |
| **Expected Result** | What should happen |
| **Actual Result** | What the tester observes during execution |
| **Priority** | High / Medium / Low |
| **Category** | Smoke / Functional / Negative |
| **Spec File** | Corresponding Playwright spec file |

---

## Test Cases

| TC ID | Title | Preconditions | Steps | Expected Result | Actual Result | Priority | Category | Spec File |
|-------|-------|---------------|-------|-----------------|---------------|----------|----------|-----------|
| TC-001 | User opens the checkboxes page and sees the page content | Browser is open and internet access is available | 1. Navigate to https://the-internet.herokuapp.com/checkboxes.<br>2. Wait for the page to load.<br>3. Observe the page title and heading. | The page loads successfully, the title is "The Internet", and the heading "Checkboxes" is visible. | To be filled during execution. | High | Smoke | tests/checkboxes.spec.ts |
| TC-002 | User verifies the default checkbox states | The checkboxes page is open | 1. Locate the two checkboxes on the page.<br>2. Check the state of checkbox 1.<br>3. Check the state of checkbox 2. | Checkbox 1 is unchecked and checkbox 2 is checked by default. | To be filled during execution. | High | Functional | tests/checkboxes.spec.ts |
| TC-003 | User clicks checkbox 1 to select it | The checkboxes page is open and checkbox 1 is currently unchecked | 1. Click checkbox 1.<br>2. Observe the state of checkbox 1. | Checkbox 1 becomes checked successfully. | To be filled during execution. | High | Functional | tests/checkboxes.spec.ts |
| TC-004 | User unchecks checkbox 2 by clicking it | The checkboxes page is open and checkbox 2 is currently checked | 1. Click checkbox 2.<br>2. Observe the state of checkbox 2. | Checkbox 2 becomes unchecked successfully. | To be filled during execution. | High | Functional | tests/checkboxes.spec.ts |
| TC-005 | User clicks an already checked checkbox again | Checkbox 2 is already checked | 1. Click checkbox 2 again.<br>2. Observe the checkbox state. | The checkbox remains checked and no unexpected state change occurs. | To be filled during execution. | Medium | Negative | tests/checkboxes.spec.ts |

---

## Summary

| Priority | Count |
|----------|-------|
| High | 4 |
| Medium | 1 |
| Low | 0 |
| **Total** | **5** |

| Category | Count |
|----------|-------|
| Smoke | 1 |
| Functional | 3 |
| Negative | 1 |
