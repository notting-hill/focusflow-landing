import React from 'react';
import { SEO } from '../components/SEO';
import { APP_NAME, APP_VERSION, TERMS_OF_SERVICE_URL, SUPPORT_EMAIL } from '../data/appConfig';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export const Terms: React.FC = () => {
  return (
    <>
      <SEO
        title={`${APP_NAME} - Terms of Service`}
        description="Terms of Service for FocusFlow mobile application."
        canonical={TERMS_OF_SERVICE_URL}
      />
      <Header />
      <main>
        <section className="pt-20 pb-16 bg-white dark:bg-gray-900">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Notice Banner */}
            <div className="mb-10 p-6 rounded-2xl bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-800">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-amber-100 dark:bg-amber-950 flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-5 h-5 text-amber-600 dark:text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-amber-900 dark:text-amber-100 mb-1">
                    Important Notice — Placeholder Content
                  </h3>
                  <p className="text-sm text-amber-800 dark:text-amber-300">
                    These Terms of Service are a <strong>sample template</strong> and have <strong>not been legally reviewed</strong>.
                    They must be customized for your specific app, jurisdiction, and business model before public release.
                    Consult with a qualified attorney to ensure compliance with consumer protection laws, platform requirements (Apple/Google), and other applicable regulations.
                  </p>
                </div>
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-4">
              Terms of Service
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })} · Version {APP_VERSION}
            </p>

            <div className="prose prose-gray dark:prose-invert max-w-none space-y-8">
              <section>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">1. Acceptance of Terms</h2>
                <p>
                  By downloading, installing, accessing, or using {APP_NAME} (the "App"), you agree to be bound by these
                  Terms of Service ("Terms"). If you do not agree to these Terms, do not use the App. These Terms constitute
                  a legally binding agreement between you and {APP_NAME} Studio ("Company", "we", "us", or "our").
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">2. Description of Service</h2>
                <p>
                  {APP_NAME} is a productivity application that helps users organize tasks, build habits, and track focus sessions.
                  The App may include features such as task management, habit tracking, Pomodoro-style timers, progress analytics,
                  and data synchronization. Features are subject to change, addition, or removal at our discretion.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">3. Eligibility</h2>
                <p>
                  You must be at least 13 years old (or the minimum age required by your jurisdiction) to use the App. By using
                  the App, you represent and warrant that you meet this age requirement and have the legal capacity to enter into
                  these Terms.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">4. User Accounts</h2>
                <p>
                  Some features may require you to create an account. You are responsible for maintaining the confidentiality of
                  your account credentials and for all activities that occur under your account. You agree to provide accurate,
                  current, and complete information during registration and to update such information to keep it accurate.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">5. User Content</h2>
                <p>
                  You retain ownership of all content you create, store, or transmit through the App ("User Content"). By using
                  the App, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, adapt,
                  publish, and distribute your User Content solely for the purpose of providing the App's functionality to you.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">6. Acceptable Use</h2>
                <p>You agree not to use the App for any unlawful or prohibited purpose, including but not limited to:</p>
                <ul className="list-disc list-inside space-y-1 mt-2 ml-4">
                  <li>Violating any applicable law or regulation</li>
                  <li>Infringing on intellectual property rights of others</li>
                  <li>Transmitting viruses, malware, or other harmful code</li>
                  <li>Attempting to gain unauthorized access to the App or its systems</li>
                  <li>Interfering with or disrupting the App's operation</li>
                  <li>Using the App for commercial purposes without prior written consent</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">7. Intellectual Property</h2>
                <p>
                  The App and its original content (excluding User Content), features, and functionality are owned by {APP_NAME} Studio
                  and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
                  These Terms do not grant you any rights to use our trademarks, logos, or brand assets.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">8. Subscriptions & Purchases</h2>
                <p>
                  The App may offer paid subscriptions or in-app purchases. Pricing, billing cycles, and payment terms are
                  determined by the respective app store (Apple App Store / Google Play Store) and are subject to their
                  terms of service. All purchases are non-refundable except as required by applicable law or app store policy.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">9. Disclaimers</h2>
                <p>
                  THE APP IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED,
                  INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE,
                  NON-INFRINGEMENT, OR COURSE OF PERFORMANCE. WE DO NOT WARRANT THAT THE APP WILL BE UNINTERRUPTED, ERROR-FREE,
                  OR FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">10. Limitation of Liability</h2>
                <p>
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, {APP_NAME} STUDIO SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL,
                  SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION LOSS OF PROFITS, DATA, USE,
                  GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM YOUR USE OF OR INABILITY TO USE THE APP.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">11. Termination</h2>
                <p>
                  We may terminate or suspend your access to the App immediately, without prior notice or liability, for any
                  reason, including if you breach these Terms. Upon termination, your right to use the App will cease immediately.
                  Provisions that should survive termination (e.g., intellectual property, disclaimers, limitation of liability)
                  shall survive.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">12. Governing Law</h2>
                <p>
                  These Terms shall be governed by and construed in accordance with the laws of the jurisdiction where
                  {APP_NAME} Studio is established, without regard to its conflict of law principles. You agree to submit to
                  the exclusive jurisdiction of the courts located in that jurisdiction.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">13. Changes to Terms</h2>
                <p>
                  We reserve the right to modify these Terms at any time. We will provide notice of material changes by
                  updating the "Last updated" date and/or through in-app notifications. Your continued use of the App after
                  such changes constitutes acceptance of the new Terms.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">14. Contact Us</h2>
                <p>
                  If you have any questions about these Terms, please contact us:
                </p>
                <ul className="list-disc list-inside space-y-1 mt-2 ml-4">
                  <li>Email: <a href={`mailto:${SUPPORT_EMAIL}`} className="text-[#6C5CE7] hover:underline">{SUPPORT_EMAIL}</a></li>
                  <li>Website: <a href={TERMS_OF_SERVICE_URL} target="_blank" rel="noopener noreferrer" className="text-[#6C5CE7] hover:underline">{TERMS_OF_SERVICE_URL}</a></li>
                </ul>
              </section>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};