import React from 'react';

const PrivacyPolicy = () => {
  return (
  
    <>
      <div className="h-[150px]"></div> 
    <div className="max-w-5xl mx-auto px-4 py-10">
      
      <h1 className="text-3xl font-bold mb-4 ">Privacy Policy</h1>
      <p className="text-sm text-gray-600 mb-6">Last updated: 27/02/2024</p>

      <p className="mb-4">
        This Privacy Policy describes how <strong>evengreener.myshopify.com</strong> (the “Site” or “we”) collects,
        uses, and discloses your Personal Information when you visit or make a purchase from the Site.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">Contact</h2>
      <p className="mb-4">
      After reviewing this policy, if you have additional questions, want more information about our privacy practices, or would like to make a complaint, please contact us by
       e-mail at customer.care@evengreener.com, via a contact form or by mail using the details provided below:
      </p>
      <p className="mb-4">
        <strong>EvenGreener, Brookfield Court, Selby Road, Leeds LS25 1NB, United Kingdom</strong>
      </p>

      <h2 className="text-2xl font-bold mb-4">Collecting Personal Information</h2>
      <p className="mb-6">
        When you visit the Site, we collect certain information about your device, your interaction with the Site, and
        information necessary to process your purchases. We may also collect additional information if you contact us for
        customer support. In this Privacy Policy, we refer to any information about an identifiable individual as
        “Personal Information”.
      </p>

      {/* Device Information */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-2">Device Information</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>
            <strong>Purpose of collection:</strong> to load the Site accurately for you, and to perform analytics on Site usage to optimize our Site.
          </li>
          <li>
            <strong>Source of collection:</strong> Collected automatically when you access our Site using cookies, log files, web beacons, tags, or pixels.
          </li>
          <li>
            <strong>Disclosure for a business purpose:</strong> shared with our processor Shopify, Shopify apps, marketing and eCommerce-related platforms – including but not limited to social media channels, Email Marketing Platform, insight platforms (e.g., Hotjar), reputation management, and online advertising platforms.
          </li>
          <li>
            <strong>Personal Information collected:</strong> version of web browser, IP address, time zone, cookie information, what sites or products you view, search terms, and how you interact with the Site.
          </li>
        </ul>
      </div>

      {/* Order Information */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-2">Order Information</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>
            <strong>Purpose of collection:</strong> to provide products or services to you, process your payment information, arrange for shipping, provide invoices/order confirmations, communicate with you, screen for fraud, and provide relevant marketing (in line with your preferences).
          </li>
          <li>
            <strong>Source of collection:</strong> collected from you.
          </li>
          <li>
            <strong>Disclosure for a business purpose:</strong> shared with our processor Shopify, Shopify apps, and platforms for advertising, social media, email marketing, reputation management, and analytics.
          </li>
          <li>
            <strong>Personal Information collected:</strong> name, billing address, shipping address, payment information (including credit card numbers), email address, and phone number.
          </li>
        </ul>
      </div>

      {/* Customer Support Information */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-2">Customer Support Information</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>
            <strong>Purpose of collection:</strong> if you contact our customer services department with a query or complaint, we process your personal data to resolve it.
          </li>
          <li>
            <strong>Source of collection:</strong> collected from you.
          </li>
          <li>
            <strong>Disclosure for a business purpose:</strong> we use Gorgias Helpdesk to provide customer support.
          </li>
          <li>
            <strong>Personal Information collected:</strong> contact details, and your correspondence with our Customer Care team.
          </li>
        </ul>
      </div>

      <h2 className="text-xl font-semibold mt-8 mb-2">Minors</h2>
      <p className="mb-4">
      The Site is not intended for individuals under the age of 18. We do not intentionally collect Personal Information from children. If you are the parent or guardian and 
      believe your child has provided us with Personal Information, please contact us at the address above to request deletion.      </p>

      {/* Sharing Personal Information */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Sharing Personal Information</h2>
        <p className="mb-4">
          We share your Personal Information with service providers to help us provide our services and fulfill our contracts with you.
          For example:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            We use Shopify to power our online store. You can read more about how Shopify uses your Personal Information here:{" "}
            "https://www.shopify.com/legal/privacy" 
              shopify.com/legal/privacy.
            
          </li>
          <li>
            We may share your Personal Information to comply with applicable laws and regulations, respond to lawful requests (such as subpoenas or warrants), or to protect our rights.
          </li>
        </ul>
      </section>

      {/* Behavioural Advertising */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Behavioural Advertising</h2>
        <p className="mb-4">
          As described above, we use your Personal Information to provide you with targeted advertisements or marketing communications
          we believe may be of interest to you. For example:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            We use Google Analytics to help us understand how our customers use the Site. Learn more about Google’s use of your info{" "}
            "https://www.google.com/intl/en/policies/privacy/"
            . Opt out{" "}
           "https://tools.google.com/dlpage/gaoptout" 
              here.
            
          </li>
          <li>
            We share information about your usage, purchases, and ad interactions with our advertising partners, sometimes directly or via cookies/technologies.
          </li>
          <li>Facebook is directly integrated as a marketing channel for our store.</li>
        </ul>
        <p className="mt-4">
          For more info on how targeted advertising works, visit the{" "}
          "https://www.networkadvertising.org/understanding-online-advertising/how-does-it-work" 
            Network Advertising Initiative’s educational page
          .
        </p>
        <p className="mt-4">You can opt out of targeted advertising using the following links:</p>
        <ul className="list-disc list-inside pl-5 space-y-2">
          <li>
            Facebook:{" "}
            "https://www.facebook.com/settings/?tab=ads" 
              facebook.com/settings/?tab=ads
           
          </li>
          <li>
            Google:{" "}
          "https://www.google.com/settings/ads/anonymous" 
         
          </li>
          <li>
            Bing:{" "}
            "https://advertise.bingads.microsoft.com/en-us/resources/policies/personalized-ads" 
              Bing Ads Policy
            
          </li>
          <li>
            Digital Advertising Alliance:{" "}
            "https://optout.aboutads.info/" 
              optout.aboutads.info
            
          </li>
        </ul>
      </section>

      {/* Using Personal Information */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Using Personal Information</h2>
        <p>
          We use your Personal Information to provide and improve our services: product offerings, payment processing, shipping,
          order fulfillment, and updates on new products or offers.
        </p>
      </section>

      {/* Lawful Basis */}
      <section>
        <h2 className="text-2xl">Lawful Basis (GDPR)</h2>
        <p>
          If you are a resident of the European Economic Area (EEA), we process your personal information under these lawful bases:
        </p>
        <ul className="list-disc list-inside pl-5 space-y-1">
          <li>Your consent</li>
          <li>Performance of the contract</li>
          <li>Compliance with legal obligations</li>
          <li>Protection of vital interests</li>
          <li>Public interest</li>
          <li>Legitimate interests that don’t override your rights</li>
        </ul>
      </section>

      {/* Retention */}
      <section>
        <h2 className="text-2xl">Retention</h2>
        <p>
          We retain your Personal Information for our records unless and until you request deletion. For more details, refer to the
          "Your Rights" section.
        </p>
      </section>

      {/* Your Rights */}
      <section>
        <h2 className="text-2xl ">Your Rights</h2>
        <p className="mb-2">
          If you're an EEA resident, you have rights to:
        </p>
        <ul className="list-disc list-inside pl-5 space-y-1">
          Access the Personal Information we hold
          Port it to a new service
          Request correction, update, or deletion
        </ul>
        <p className="mt-4">
          Your data may be processed in Ireland, then transferred to Canada, the US, or other regions. Learn more at:{" "}
          <a
            href="https://help.shopify.com/en/manual/your-account/privacy/GDPR"
          
          >
            Shopify’s GDPR Whitepaper
          </a>.
        </p>
      </section>

      {/* Changes */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Changes</h2>
        <p>
        We may update this Privacy Policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal, or regulatory reasons.        </p>
      </section>

      {/* Complaints */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Complaints</h2>
        <p>As noted above, if you would like to make a complaint, please contact us by e-mail or by mail using the details provided under “Contact” above.

</p>
        <p>
        If you are not satisfied with our response to your complaint, you have the right to lodge your complaint with the relevant data protection authority. You can contact your
         local data protection authority (https://ico.org.uk/global/contact-us/), or our supervisory authority.
        </p>
      </section>
    </div>
    </>
  );
};

export default PrivacyPolicy;
