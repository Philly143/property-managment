import React from "react";

function About() {
  return (
    <div className="row mt-5" style={{ position: "relative" }}>
      <div className="col-6 mt-5 ml-5">
        <img
          width="95%"
          src="https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=600"
        />
      </div>
      <div className="col-5">
        <h2 className="text-warning mt-5">
          <strong>Zillow</strong>
        </h2>
        <p>
          Zillow has stated that it is a media company that generates revenue by
          selling advertising on its website. In April 2009, Zillow announced a
          partnership to lend its real-estate search engine to the websites of
          more than 180 United States newspapers as a part of the Zillow
          Newspaper Consortium. Zillow shares advertising revenue from the
          co-branded sites with the newspapers and extends its reach into local
          markets.[5] In February 2011, Zillow and Yahoo! Real Estate launched
          an exclusive partnership creating the largest real-estate advertising
          network on the web, according to comScore Media Metrix.[6] Zillow now
          allows renters to pay rent online to their landlords for properties on
          the Zillow Rental Manager tool.[clarification needed] Zillow charges
          renters a transaction fee when using debit or credit cards to pay
          their landlord. However, renters also have a no-fee option to pay
          their rent by using ACH.[7][8] In 2018, Zillow Group began operations
          as a blanket referral-fee network without an upfront cost called
          Zillow Flex. Once brokers close a home transaction with a client, they
          pay a referral fee out of escrow to Zillow. In areas where Flex
          partner brokers operate alongside brokers who pay for Zillow Premier
          Agent upfront ,[clarification needed] leads and connections flow
          through the same system and are allocated randomly to partner brokers.
          Blanket referral fees paid to Zillow Group are not disclosed to
          consumers, but likely range between 30 and 40% of the entire broker's
          commission. The main qualification for real-estate brokers who
          participate with Zillow Flex Program is their willingness to pay a
          blanket referral fee once the transaction is complete.
        </p>
      </div>
      <div className="col-1"></div>
    </div>
  );
}

export default About;
