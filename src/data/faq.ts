export interface FAQItem {
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'What is FocusFlow?',
    answer:
      'FocusFlow is a productivity application designed to help you organize tasks, build habits, and improve your daily focus.',
  },
  {
    question: 'Is FocusFlow available on Android and iOS?',
    answer:
      'FocusFlow is designed for both Android and iOS. Availability depends on the official store release.',
  },
  {
    question: 'Is FocusFlow free?',
    answer:
      'Pricing and subscription information will be announced through the official app stores.',
  },
  {
    question: 'How can I contact support?',
    answer: 'You can contact our support team at support@focusflow.example.',
  },
  {
    question: 'Where can I report a bug?',
    answer:
      'Please email support@focusflow.example and include your device model, operating system version, and a description of the issue.',
  },
  {
    question: 'How can I request account deletion?',
    answer:
      'Please contact our support team with your account information and deletion request. The actual account deletion process must be implemented and verified before publishing this policy.',
  },
];