import React from 'react'
import style from '../../../styles/Preview.module.css'

function Preview() {
  return (
    <form>
      <div id={style.Container1} className={style.Container}>
        <div id={style.SubCon1}>
          <p>E-Mandate Authorization Date</p>
          <p></p>
        </div>
        <div id={style.SubCon2}>
          <p>Current Mandate Status</p>
          <p></p>
        </div>
        <div id={style.SubCon3}>
          <p>Mandate Mode</p>
          <p></p>
        </div>
        <div id={style.SubCon4}>
          <p>Mandate ID</p>
          <p></p>
        </div>
      </div>

      <div id={style.Container2} className={style.Container}>
        <div id={style.SubCon1}>
          <label htmlFor="auto-collection-amount">Auto Collection Amount</label>
          <input
            type="number"
            name="auto-collection-amount"
            id="auto-collection-amount"
            disabled
          />
        </div>

        <div id={style.SubCon2}>
          <label htmlFor="auto-collection">Auto Collection Date </label>
          <input
            type="date"
            name="auto-collection"
            id="auto-collection"
            disabled
          />
        </div>

        <div id={style.SubCon3}>
          <label htmlFor="product">Product </label>
          <input type="text" name="product" id="product" disabled />
        </div>

        <div id={style.SubCon4}>
          <label htmlFor="category-code">Category Code </label>
          <input type="text" name="category-code" id="category-code" disabled />
        </div>

        <div id={style.SubCon5}>
          <label htmlFor="branch">Branch </label>
          <input type="text" name="branch" id="branch" disabled />
        </div>
      </div>

      <div id={style.Container3} className={style.Container}>
        <div id={style.SubCon1}></div>
        <div id={style.SubCon2}>
          <div>
            <label htmlFor="umrn">UMRN </label>
            <input type="text" name="umrn" id="umrn" disabled />
          </div>

          <div>
            <label htmlFor="sponser-bank-code">Sponser Bank Code </label>
            <input
              type="text"
              name="sponser-bank-code"
              id="sponser-bank-code"
              disabled
            />
          </div>
        </div>
        <div id={style.SubCon3}>
          <div>
            <label htmlFor="Date-on-Mandate">Date on Mandate </label>
            <input
              type="text"
              name="Date-on-Mandate"
              id="Date-on-Mandate"
              disabled
            />
          </div>
          <div>
            <label htmlFor="unity-code">Unity Code </label>
            <input type="text" name="unity-code" id="unity-code" disabled />
          </div>
        </div>
      </div>

      <div id={style.Container4} className={style.Container}>
        <div id={style.SubCon1}>
          <label htmlFor="mandate" className={style.label175}>
            Mandate{" "}
          </label>
          <input type="text" name="mandate" id="mandate" disabled />
        </div>

        <div id={style.SubCon2}>
          <label htmlFor="I-We-hearby-Authorize">I/We hearby Authorize </label>
          <input
            type="text"
            name="I-We-hearby-Authorize"
            id="I-We-hearby-Authorize"
            disabled
          />
        </div>

        <div id={style.SubCon3}>
          <label htmlFor="to-debit">To Debit </label>
          <input type="text" name="to-debit" id="to-debit" disabled />
        </div>
      </div>

      <div id={style.Container5} className={style.Container}>
        <label htmlFor="bank-ac" className={style.label175}>
          Bank A/C Number
        </label>
        <input type="text" name="bank-ac" id="bank-ac" disabled />
      </div>

      <div id={style.Container6} className={style.Container}>
        <div id={style.SubCon1}>
          <label htmlFor="with-bank">With Bank </label>
          <input type="text" name="with-bank" id="with-bank" disabled />
        </div>
        <div id={style.SubCon2}>
          <label htmlFor="ifsc">IFSC </label>
          <input type="text" name="ifsc" id="ifsc" disabled />
        </div>
        <div id={style.SubCon3}>
          <label htmlFor="or-micr">Or MICR</label>
          <input type="text" name="or-micr" id="or-micr" disabled />
        </div>
      </div>

      <div id={style.Container7} className={style.Container}>
        <div id={style.SubCon1}>
          <label htmlFor="amount">Amount </label>
          <input type="text" name="amount" id="amount" disabled />
        </div>
        <div id={style.SubCon2}>
          <label htmlFor="amount-word">Amount in Word </label>
          <input type="text" name="amount-word" id="amount-word" disabled />
        </div>
      </div>

      <div id={style.Container8} className={style.Container}>
        <div id={style.SubCon1}>
          <label htmlFor="frequency">Frequency</label>
          <input type="text" name="frequency" id="frequency" disabled />
        </div>

        <div id={style.SubCon2}>
          <label htmlFor="debit-type">Debit Type</label>
          <input type="text" name="debit-type" id="debit-type" disabled />
        </div>
      </div>

      <div id={style.Container9} className={style.Container}>
        <div id={style.SubCon1}>
          <label htmlFor="reference1">Reference 1 </label>
          <input type="text" name="reference1" id="reference1" disabled />
        </div>
        <div id={style.SubCon2}>
          <label htmlFor="phone">Phone Number </label>
          <input type="text" name="phone" id="phone" disabled />
        </div>
      </div>

      <div id={style.Container10} className={style.Container}>
        <div id={style.SubCon1}>
          <label htmlFor="reference2">Reference 2 </label>
          <input type="text" name="reference2" id="reference2" disabled />
        </div>
        <div id={style.SubCon2}>
          <label htmlFor="email">Email Id </label>
          <input type="text" name="email" id="email" disabled />
        </div>
      </div>

      <div id={style.Container11} className={style.Container}>
        <label htmlFor="reference3">Reference 3 </label>
        <input type="text" name="reference3" id="reference3" disabled />
      </div>

      <div id={style.Container12} className={style.Container}>
        <p>
          agree for the debit of mandate processing charges by the bank whom am
          authorizing to debit my account as per latest schedule of charges of
          bank
        </p>
      </div>

      <div id={style.Container13} className={style.Container}>
        <h2>Preiod</h2>
      </div>

      <div id={style.Container14} className={style.Container}>
        <div id={style.SubCon1}>
          <div>
            <label htmlFor="from">From </label>
            <input type="date" name="from" id="from" disabled />
          </div>
          <div>
            <label htmlFor="to">To </label>
            <input type="date" name="to" id="to" disabled />
          </div>
          <div id={style.checkBoxCon}>
            <h6>Or</h6>
            <div>
              <input
                type="checkbox"
                name="until-cancel"
                id="until-cancel"
                disabled
              />
              <label htmlFor="until-cancel">Until Cancel</label>
            </div>
          </div>
        </div>
        <div id={style.SubCon2}>
          <p>Sign. Primary Acc. Holder</p>
          <input type="text" name="primary-acc" id="primary-acc" disabled />
          <p>1. Name as in Bank Records</p>
        </div>
        <div id={style.SubCon3}>
          <p>Sign. Secondary Acc. Holder</p>
          <input type="text" name="secondary-acc" id="secondary-acc" disabled />
          <p>1. Name as in Bank Records</p>
        </div>
        <div id={style.SubCon4}>
          <p>Sign. Tertiary Acc. Holder</p>
          <input type="text" name="tertiary-acc" id="tertiary-acc" disabled />
          <p>1. Name as in Bank Records</p>
        </div>
      </div>

      <div id={style.Container15} className={style.Container}>
        <p>
          This is to confirm that declaration has been carefully read,
          understood and made by me/us. I'm authorizing the user
          Entity/Corporate to debit my account based on the instructions as
          agreed and signed by me. I've understood that I am authorized to
          cancel/amend this mandate by appropriately communicating the
          cancellation/amendment request to the User/Entity/Corporate or the
          bank where I've authorized the debit.
        </p>
      </div>
    </form>
  );
}

export default Preview