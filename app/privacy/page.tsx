import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

export const metadata = {
  title: "Privacy Policy | TechVision Studios",
  description: "Privacy policy for TechVision Studios",
};

export default function PrivacyPage() {
  return (
    <Section className="bg-white dark:bg-dark-950">
      <Container size="md">
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
            Privacy Policy
          </h1>
          
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Last updated: December 2024
          </p>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
            1. Information We Collect
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            We collect information you provide directly to us, including name, email
            address, phone number, and any other information you choose to provide.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
            2. How We Use Your Information
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            We use the information we collect to provide, maintain, and improve our
            services, communicate with you, and comply with legal obligations.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
            3. Information Sharing
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            We do not share your personal information with third parties except as
            described in this policy or with your consent.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
            4. Data Security
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            We implement appropriate technical and organizational measures to protect
            your personal information against unauthorized access, alteration,
            disclosure, or destruction.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
            5. Contact Us
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            If you have any questions about this Privacy Policy, please contact us at
            privacy@techvision.com
          </p>
        </div>
      </Container>
    </Section>
  );
}


