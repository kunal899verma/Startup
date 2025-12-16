import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

export const metadata = {
  title: "Terms of Service | TechVision Studios",
  description: "Terms of service for TechVision Studios",
};

export default function TermsPage() {
  return (
    <Section className="bg-white dark:bg-dark-950">
      <Container size="md">
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
            Terms of Service
          </h1>
          
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Last updated: December 2024
          </p>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
            1. Acceptance of Terms
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            By accessing and using this website, you accept and agree to be bound by
            the terms and provision of this agreement.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
            2. Use License
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Permission is granted to temporarily access the materials on TechVision
            Studios' website for personal, non-commercial transitory viewing only.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
            3. Disclaimer
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            The materials on TechVision Studios' website are provided on an 'as is'
            basis. We make no warranties, expressed or implied, and hereby disclaim
            and negate all other warranties.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
            4. Limitations
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            In no event shall TechVision Studios or its suppliers be liable for any
            damages arising out of the use or inability to use the materials on our
            website.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
            5. Revisions
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            TechVision Studios may revise these terms of service at any time without
            notice. By using this website, you agree to be bound by the current
            version of these terms.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
            6. Contact Information
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            For questions about these Terms of Service, please contact us at
            legal@techvision.com
          </p>
        </div>
      </Container>
    </Section>
  );
}




