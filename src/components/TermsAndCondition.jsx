import React from 'react';

const TermsAndCondition = () => {
  return (
    <div className="bg-white text-gray-800 px-6 md:px-20 py-10">
        <div className="h-[170px]"></div>
      <div className="text-center mb-10">
        <h1 className="text-4xl font-semibold">Terms and Conditions</h1>
        <p className="italic mt-1">Last Updated: 07/12/2024</p>
      </div>

      <p className="mb-6">
        This is a legally binding document referring to the order which You have placed. You will be bound by these Terms and Conditions. Please make sure that they do not contain anything that You are not prepared to agree to. If You are uncertain as to the meaning of any part of this document or your rights under these Terms and Conditions, or want any explanation of them, please contact Us at the address set out below.
      </p>

      <h2 className="text-lg font-bold mb-2">1. DEFINITIONS</h2>
      <p className="mb-4">
        In these Terms and Conditions the following words will have the following special meanings:
      </p>
      <ul className="list-disc list-inside mb-6 space-y-2">
        <li>
         "Agreement" means any contract between You and Us for the sale and purchase of goods;
        </li>
        <li>
          "Goods" means any goods to be supplied to You by Us on the terms set out below;
        </li>
        <li>
          "Us", "We" or "the Company"means EvenGreener (Company No. 06632263) of Brookfield Court, Selby Road, Leeds LS25 1NB England;
        </li>
        <li>
          "You" or "the Customer" means You, the Customer, whose details are set out in the Order.
        </li>
      </ul>

      <h2 className="text-lg font-bold mb-2">2. MAKING AN ORDER</h2>

      <p className="mb-2">2.1 You can place an order for Goods (an "Order") by:</p>
      <ul className="list-disc list-inside mb-4 space-y-2 pl-4">
        <li>2.1.1 completing the electronic order form on our website;</li>
        <li>2.1.2 completing a hard copy order form (available on published literature) and sending it to Us at EvenGreener, Brookfield Court, Selby Road, Leeds LS25 1NB;</li>
        <li>2.1.3 by calling 0800 316 4454 or the specific telephone number printed on the promotional literature.</li>
      </ul>

      <p className="mb-2">2.2 When We receive your Order we will acknowledge it as follows:</p>
      <ul className="list-disc list-inside mb-4 space-y-2 pl-4">
        <li>2.2.1 Where an e-mail address is provided confirmation will be sent by e-mail;</li>
        <li>2.2.2 Where an e-mail address is not provided we will confirm by post;</li>
        <li>2.2.3 Confirmation will include:
          <ul className="list-disc list-inside ml-6 mt-1 space-y-1">
            <li>(a) a description of the Goods ordered;</li>
            <li>(b) confirmation of the price of the Goods and applicable delivery costs;</li>
            <li>(c) confirmation on how to pay (if You have not already done so);</li>
            <li>(d) details as to when and how to expect delivery;</li>
            <li>(e) your right to cancel your Order;</li>
            <li>(f) the method for return of Goods; and</li>
            <li>(g) any applicable after sales guarantees or warranties.</li>
          </ul>
        </li>
      </ul>

      <p className="mb-4">
        2.3 Your Order will be accepted by Us when We advise you by telephone that your order has been received, send out written acknowledgement of receipt by e-mail or send out written acknowledgement of your order by post. Our acceptance of your Order will create a legally binding contract between us, subject to these Terms and Conditions.
      </p>

      <p className="mb-2">
        2.4 Goods are subject to availability and We reserve the right to refuse to accept any Order for any reason. In the event that We are unable or unwilling to supply the Goods We will inform You as soon as possible and, where You have already paid, give You a full refund.
      </p>
      <p>2.5 The price You pay for the Goods is the price displayed on our current promotional literature, catalogue or website at the time We receive your Order, plus any applicable delivery charges (see section 5 below).</p>
        <p>Whilst We try to ensure that the prices set out in all our promotional literature are correct, errors can occur. If We discover an error in the price of the Goods You have ordered We will inform You as soon as possible and give You the option of reconfirming your Order at the correct price, or alternatively of cancelling your Order.</p>
        <p>If We are unable to contact You, We will treat the Order as cancelled. If You cancel your order and have already paid for the Goods, You will receive a full refund.</p>
        <p>2.6 If any Goods You order are not available, We will contact You to discuss how You wish to proceed. If We are unable to contact You We will use our discretion and either (i) send a substitute or (ii) refund You the price of the unavailable item.</p>
        <p>2.7 All prices shown are in £ sterling and include VAT (where applicable) at the current rates, but exclude delivery charges unless stated.</p>
        <p>2.8 Payment may be made by cheque or postal order or credit/debit cards: Visa, MasterCard, Maestro, Visa Debit, and PayPal.</p>
        <p>2.9 Cheque/postal order must accompany the order form. We will bank it immediately upon receipt.</p>
        <p>2.10 Credit/debit card payments will be authorized when the order is made but not debited until Goods are received into our warehouse.</p>

         {/* Description Section */}
      <section>
        <h2 className="text-xl font-semibold mt-6 mb-2">3. Description of Goods</h2>
        <p>We cannot guarantee that the appearance and/or colour of Goods shown in our promotional literature or on our website exactly reproduce the appearance and/or colour of the physical Goods themselves. All sizes and measurements quoted are approximate.</p>
      </section>

      {/* Delivery Section */}
      <section>
        <h2 className="text-xl font-semibold mt-6 mb-2">4. Delivery</h2>
        <p>4.1 Our delivery charges (where applicable) are set out in our promotional literature or website.</p>
        <p>4.2 Products are dispatched from various depots and warehouses within 1-14 days. We will notify You if the period is likely to exceed 14 days.</p>
        <p>4.3 Once Goods are delivered to You, You are responsible for their safekeeping.</p>
        <p>4.4 Ownership of the Goods shall pass to You when full payment is received including any applicable delivery charges.</p>
      </section>

      {/* Returns Section */}
      <section>
        <h2 className="text-xl font-semibold mt-6 mb-2">5. Cancellation, Returns and Refunds</h2>
        <p>5.1 Please keep your receipt or order number. Check your Goods before installing or using them.</p>
        <p>5.2 Money-Back Guarantee:</p>
        <ul className="list-disc list-inside ml-4 space-y-1">
          <li>5.2.1 Cancel anytime before delivery or within 30 days after delivery. Goods must be unused, as new, in saleable condition, and in original packaging.</li>
          <li>5.2.2 Non-faulty goods must be returned to us for a refund.</li>
          <li>5.2.3 You will receive a full refund under our Money-Back Guarantee.</li>
          <li>5.2.4 Collection charges may apply if our couriers collect the goods.</li>
        </ul>
        <h2 className="text-xl font-semibold mb-2">5.3 Faulty Goods</h2>
        <p>
          If any Goods You purchase are faulty, We may offer a repair, exchange or refund as appropriate. This does not affect your legal rights. Please contact Us on 0800 316 4454 within 30 days of delivery and We will advise You how to return your Goods. Lines are open from 9:00am to 4:00pm, Monday – Friday. You can leave a message outside of these times.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">6. Liability</h2>
        <p className="mb-2">
          6.1 Nothing in these conditions excludes or limits our liability to You for death or personal injury caused by our negligence or for fraud or fraudulent misrepresentation nor where liability cannot be excluded or limited as a matter of law.
        </p>
        <p className="mb-2">
          6.2 We are responsible for losses You suffer as a result of Us breaching our obligations under the Agreement if the losses are a foreseeable consequence of Us breaching our obligations. Losses are foreseeable where they could be contemplated by both You and Us at the time the Agreement was entered into. We are not responsible for indirect losses which happen as a side effect of the main loss or damage and which are not foreseeable by You and Us, for example loss of profits, loss of use, loss of goodwill, loss of opportunity or any business loss.
        </p>
        <p>
          6.3 Subject to condition 6.1, our maximum liability (whether in contract, tort or otherwise) for loss or damage in respect of one incident or series of incidents attributable to the same cause shall be limited to a sum equal to the amount paid or payable by You for the Goods.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">7. Third Party Products</h2>
        <p className="mb-2">
          7.1 We may make third parties products available to You through our promotional literature, or website. Any such third party products are supplied by the relevant third party and subject to that third party’s terms and conditions.
        </p>
        <p className="mb-2">
          7.2 At all times We will be acting as an introduction agent for any third party suppliers. We do not warrant the accuracy of third party information about those products or warrant the quality or suitability of those products for your use. We are not liable for the supply of any third party products.
        </p>
        <p className="mb-2">
          7.3 As agents for the third parties We will handle any of your enquiries in relation to third party products and issue any refunds.
        </p>
        <p>
          7.4 We may disclose your customer information related to that transaction to the third party seller.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">8. Direct Marketing</h2>
        <p className="mb-2">
          8.1 We would like to contact You from time to time, by post, telephone or email, with details of our other products and services which We think might be of interest to You.
        </p>
        <p>
          8.2 If You would prefer not to be included in such communications We will give you the option to notify Us of this in the relevant ordering process. Alternatively, please email <a href="mailto:customer.care@evengreener.com" className="text-blue-600 underline">customer.care@evengreener.com</a>, or telephone 0800 316 4454 or write to EvenGreener, Brookfield Court, Selby Road, Leeds LS25 1NB to let Us know.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">9. General</h2>
        <p className="mb-2">
          9.1 We may delay delivery, cancel the Agreement or reduce the volume of Goods ordered by You (without liability to You) if We are prevented from or delayed in carrying on our business due to circumstances beyond our reasonable control.
        </p>
        <p className="mb-2">
          9.2 This contract is under English law and any disputes will be dealt with by the English Courts.
        </p>
        <p className="mb-2">
          9.3 If any words or phrases in this contract are in any particular circumstances held by a Court to be unfair, unreasonable or invalid, We agree that the Court can delete those words or phrases from this Agreement, and read the Agreement as if they had not been included in this first place.
        </p>
        <p className="mb-2">
          9.4 No variation of these Terms and Conditions shall be binding upon You or Us unless it is in writing and signed by both parties. Any such variation shall be particular to the circumstances and shall not be regarded as a general variation.
        </p>
        <p className="mb-2">
          9.5 Failure or delay by either You or Us in enforcing any provision of the Agreement will not be a waiver of any of your or our rights under the Agreement.
        </p>
        <p className="mb-2">
          9.6 Any waiver by You or Us of any breach or default by the other party will not be deemed a waiver of any subsequent breach or default.
        </p>
        <p>
          9.7 Each of your or our rights or remedies under this Agreement is without prejudice to any other of your or our rights or remedies.
        </p>
      </section>
        {/* Questions Section */}
        <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">10.If You Have Any Questions</h2>
        <p>
          If You have any questions about any of the above Terms and Conditions, please contact Us at:
        </p>
        <address className="not-italic mt-2">
          EvenGreener<br />
          Brookfield Court<br />
          Selby Road<br />
          Leeds<br />
          LS25 1NB
        </address>
      </section>
    </div>
  );
};

export default TermsAndCondition;
