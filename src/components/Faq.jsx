import React from 'react'

function Faq() {
  return (
    <>
     <div className="container my-5">
    <h2 className="text-center mb-4">Frequently Asked Questions</h2>
    <div className="accordion" id="faqAccordion">

      <div className="accordion-item">
        <h2 className="accordion-header" id="faqHeadingOne">
          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapseOne" aria-expanded="true" aria-controls="faqCollapseOne">
            What is your return policy?
          </button>
        </h2>
        <div id="faqCollapseOne" className="accordion-collapse collapse show" aria-labelledby="faqHeadingOne" data-bs-parent="#faqAccordion">
          <div className="accordion-body">
            Our return policy allows for items to be returned within 30 days of receipt, provided they are in their original condition and packaging.
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header" id="faqHeadingTwo">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapseTwo" aria-expanded="false" aria-controls="faqCollapseTwo">
            How can I track my order?
          </button>
        </h2>
        <div id="faqCollapseTwo" className="accordion-collapse collapse" aria-labelledby="faqHeadingTwo" data-bs-parent="#faqAccordion">
          <div className="accordion-body">
            You can track your order using the tracking number provided in the shipment confirmation email. Visit our tracking page for more details.
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header" id="faqHeadingThree">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapseThree" aria-expanded="false" aria-controls="faqCollapseThree">
            Do you offer international shipping?
          </button>
        </h2>
        <div id="faqCollapseThree" className="accordion-collapse collapse" aria-labelledby="faqHeadingThree" data-bs-parent="#faqAccordion">
          <div className="accordion-body">
            Yes, we offer international shipping to selected countries. Additional charges and delivery times may apply.
          </div>
        </div>
      </div>

    </div>
  </div></>
  )
}

export default Faq