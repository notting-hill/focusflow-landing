import React from 'react';
import { SEO } from '../components/SEO';
import { APP_NAME, APP_VERSION, PRIVACY_POLICY_URL, SUPPORT_EMAIL } from '../data/appConfig';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export const Privacy: React.FC = () => {
  return (
    <>
      <SEO
        title={`${APP_NAME} - Privacy Policy`}
        description="Privacy Policy for FocusFlow mobile application. Learn how we handle your data."
        canonical={PRIVACY_POLICY_URL}
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
                    This privacy policy is a <strong>sample template</strong> and has <strong>not been legally reviewed</strong>.
                    It must be customized for your specific app, jurisdiction, and data practices before public release.
                    Consult with a qualified attorney to ensure compliance with GDPR, CCPA, and other applicable regulations.
                  </p>
                </div>
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-4">
              Privacy Policy
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })} · Version {APP_VERSION}
            </p>

            <div className="prose prose-gray dark:prose-invert max-w-none space-y-8">
              <section>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">1. Introduction</h2>
                <p>
                  {APP_NAME} ("we", "our", or "us") respects your privacy. This Privacy Policy explains how we collect, use,
                  disclose, and safeguard your information when you use our mobile application (the "App"). Please read this
                  policy carefully. If you do not agree with the terms of this policy, please do not access the App.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">2. Information We Collect</h2>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Personal Data</h3>
                <p>
                  We may collect personally identifiable information that you voluntarily provide, such as:
                </p>
                <ul className="list-disc list-inside space-y-1 mt-2 ml-4">
                  <li>Email address (for account creation and support)</li>
                  <li>Username and profile preferences</li>
                  <li>Task, habit, and focus session data you create in the App</li>
                </ul>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 mt-4">Usage Data</h3>
                <p>
                  We may automatically collect certain information when you access the App, including:
                </p>
                <ul className="list-disc list-inside space-y-1 mt-2 ml-4">
                  <li>Device information (model, OS version, unique device identifiers)</li>
                  <li>App usage statistics (features used, session duration, crash reports)</li>
                  <li>IP address and approximate location (for security and analytics)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">3. How We Use Your Information</h2>
                <p>
                  We use the information we collect for the following purposes:
                </p>
                <ul className="list-disc list-inside space-y-1 mt-2 ml-4">
                  <li>To provide, maintain, and improve the App</li>
                  <li>To process transactions and manage your account</li>
                  <li>To send you service-related communications (updates, security alerts)</li>
                  <li>To respond to your comments, questions, and support requests</li>
                  <li>To analyze usage trends and improve user experience</li>
                  <li>To detect, prevent, and address technical issues and fraud</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">4. Data Storage & Security</h2>
                <p>
                  We implement appropriate technical and organizational measures to protect your personal information against
                  unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the
                  Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">5. Third-Party Services</h2>
                <p>
                  The App may use third-party services that collect information used to identify you. These include:
                </p>
                <ul className="list-disc list-inside space-y-1 mt-2 ml-4">
                  <li>Analytics providers (e.g., Firebase Analytics, Mixpanel)</li>
                  <li>Crash reporting (e.g., Firebase Crashlytics, Sentry)</li>
                  <li>Cloud storage and sync (e.g., Firebase, iCloud)</li>
                  <li>Push notification services</li>
                </ul>
                <p className="mt-3">
                  Link to privacy policies of third-party service providers used by the App should be added here.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">6. Your Rights</h2>
                <p>
                  Depending on your jurisdiction, you may have the following rights regarding your personal data:
                </p>
                <ul className="list-disc list-inside space-y-1 mt-2 ml-4">
                  <li>Right to access and obtain a copy of your data</li>
                  <li>Right to rectify inaccurate or incomplete data</li>
                  <li>Right to erasure ("right to be forgotten")</li>
                  <li>Right to restrict or object to processing</li>
                  <li>Right to data portability</li>
                  <li>Right to withdraw consent at any time</li>
                </ul>
                <p className="mt-3">
                  To exercise these rights, please contact us at <a href={`mailto:${SUPPORT_EMAIL}`} className="text-[#6C5CE7] hover:underline">{SUPPORT_EMAIL}</a>.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">7. Children's Privacy</h2>
                <p>
                  The App is not directed to children under 13 (or the applicable age in your jurisdiction). We do not knowingly
                  collect personal information from children. If you are a parent or guardian and believe your child has provided
                  us with personal information, please contact us.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">8. Changes to This Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new
                  policy on this page and updating the "Last updated" date. You are advised to review this policy periodically.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">9. Contact Us</h2>
                <p>
                  If you have any questions about this Privacy Policy, please contact us:
                </p>
                <ul className="list-disc list-inside space-y-1 mt-2 ml-4">
                  <li>Email: <a href={`mailto:${SUPPORT_EMAIL}`} className="text-[#6C5CE7] hover:underline">{SUPPORT_EMAIL}</a></li>
                  <li>Website: <a href={PRIVACY_POLICY_URL} target="_blank" rel="noopener noreferrer" className="text-[#6C5CE7] hover:underline">{PRIVACY_POLICY_URL}</a></li>
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