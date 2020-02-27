import React from "react";

export default function ExistingAddress() {
  return (
    <div>
      <div class="pop-up">
        <div class="pop-up-header">
          <h2>INFO</h2>
        </div>
        <div class="pop-up-body">
          <p>
            Please confirm if your address is an approved business address. For
            residential address, URA requirements should be satisfied and a
            license must be obtained.
          </p>
        </div>
        <div class="pop-up-footer">
          <button class="secondary-button">Cancel</button>
          <button class="secondary-button">I Acknowledge</button>
        </div>
      </div>
    </div>
  );
}
