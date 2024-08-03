import React from 'react'

const Policy = () => {
  return (
    <>
       <main className='w-full h-full bg-white dark:bg-[#1E1E1E] dark:text-white text-black lg:px-24 md:px-20 px-10 py-20'>
       <h1 className='font-semibold md:text-5xl text-[1.8rem]'>Privacy Policy for Sew With Ijeoma (SWIFA App)</h1>
        <p className='mt-4'>Last Updated: 20/April/2024</p>
        <div className="mt-8">
          <p>This Privacy Policy outlines how we handle your personal information in compliance with applicable laws.</p>
          <section className="mt-4">
            <h2 className='font-semibold text-2xl pb-2'>1. Introduction</h2>
            <p>Sew With Ijeoma is an online platform offering courses in clothing design and sewing techniques. By using our platform, you agree to the terms of this Privacy Policy.</p>
          </section>
          <section className="mt-4">
            <h2 className='font-semibold text-2xl pb-2'>2. Information We Collect</h2>
            <p>When you register on Sew With Ijeoma, we collect the following information:</p>
            <ul className="list-disc pl-5 py-2 flex flex-col gap-2">
              <li>Full Name</li>
              <li>Username</li>
              <li>Email Address</li>
              <li>Phone Number</li>
              <li>Password</li>
            </ul>
            <p>This information is collected during the registration process.</p>
          </section>
          <section className="mt-4">
            <h2 className='font-semibold text-2xl pb-2'>3. How We Use Your Information</h2>
            <ul className="list-disc pl-5 flex flex-col gap-2">
              <li><strong>Full Name:</strong> To issue certificates upon course completion.</li>
              <li><strong>Username, Email Address, Phone Number, Password:</strong> To create and manage your account, and to personalize your experience on our platform.</li>
            </ul>
          </section>
          <section className="mt-4">
            <h2 className='font-semibold text-2xl pb-2'>4. Data Security</h2>
            <p>Sew With Ijeoma maintains appropriate technical and organizational safeguards against unauthorized processing of personal data and against accidental loss, destruction, or damage.</p>
          </section>
          <section className="mt-4">
            <h2 className='font-semibold text-2xl pb-2'>5. Sharing of Information</h2>
            <p>We do not share your personal information with third parties, except for:</p>
            <ul className="list-disc pl-5 flex flex-col gap-2 py-2">
              <li><strong>Payment Processing:</strong> When you make payments through the payment software, your payment information may be shared with the payment software or transaction processing. However, your personal information is not shared in this process.</li>
              <li><strong>Third-Party Services:</strong> In the future, we may integrate third-party services, and any data sharing will be disclosed in this Privacy Policy.</li>
            </ul>
          </section>
          <section className="mt-4">
            <h2 className='font-semibold text-2xl pb-2'>6. User Control</h2>
            <p>You have control over your personal information. You can:</p>
            <ul className="list-disc pl-5 flex flex-col gap-2 py-2">
              <li>Log out of Sew With Ijeoma at any time.</li>
              <li>Delete your account through the User Profile and Settings page.</li>
              <li>Edit and correct your data using the Edit Profile feature in the Settings page.</li>
            </ul>
          </section>
          <section className="mt-4">
            <h2 className='font-semibold text-2xl pb-2'>7. Children's Privacy</h2>
            <p>Sew With Ijeoma is not intended for children under the age of 13, and we do not knowingly collect personal information from children.</p>
          </section>
          <section className="mt-4">
            <h2 className='font-semibold text-2xl pb-2'>8. How Long We Keep the Data</h2>
            <p>Your personal data will be kept only as long as necessary for the purposes set out in this Notice and in accordance with Sew With Ijeoma's applicable records retention and disposition schedules.</p>
          </section>
          <section className="mt-4">
            <h2 className='font-semibold text-2xl pb-2'>9. Updates to Privacy Policy</h2>
            <p>We may update this Privacy Policy periodically. Any changes will be posted on this page, and we may notify you through the platform or via email.</p>
          </section>
          <section className="mt-4">
            <h2 className='font-semibold text-2xl pb-2'>10. Contact Us</h2>
            <p>If you have any questions or concerns about this Privacy Policy or your personal information, please contact us at <a href="mailto:SewWithIjeoma@gmail.com" className="text-blue-600 dark:text-blue-300">SewWithIjeoma@gmail.com</a>.</p>
          </section>
          <section className="mt-4">
            <h2 className='font-semibold text-2xl pb-2'>Regulatory Compliance</h2>
            <ul className="list-disc pl-5 flex flex-col gap-2 py-2">
              <li><strong>General Data Protection Regulation (GDPR):</strong> We comply with GDPR requirements by processing personal data lawfully and respecting individual rights.</li>
              <li><strong>California Consumer Privacy Act (CCPA):</strong> We respect the privacy rights of California residents and provide mechanisms for them to exercise their CCPA rights.</li>
              <li><strong>Nigeria Data Protection Regulation 2019 (NDPR):</strong> We adhere to NDPR requirements by implementing appropriate data protection measures and respecting the privacy rights of Nigerian users.</li>
            </ul>
          </section>
          <section className="mt-4">
            <p>By using Sew With Ijeoma, you agree to the collection and use of your personal information as described in this Privacy Policy.</p>
          </section>
        </div>
       </main>
    </>
  )
}

export default Policy