
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Who can participate in the Z47 AI Hackathon?",
      answer: "The hackathon is open to developers, data scientists, AI researchers, students, and professionals from all backgrounds. You can participate individually or in teams of up to 4 members."
    },
    {
      question: "What are the judging criteria?",
      answer: "Projects will be evaluated based on innovation, technical implementation, business potential, presentation quality, and how well they address real-world enterprise AI challenges."
    },
    {
      question: "Do I need to have an idea before registering?",
      answer: "No! While having a preliminary idea is helpful, it's not required. We'll provide challenge statements and plenty of inspiration during the event. You can also form teams and brainstorm ideas on-site."
    },
    {
      question: "What resources and tools will be provided?",
      answer: "We'll provide access to cloud computing resources, AI/ML APIs, datasets, development tools, and mentorship from industry experts. Food, beverages, and workspace will also be provided."
    },
    {
      question: "What is the format of the hackathon?",
      answer: "It's a 48-hour intensive hackathon with keynote speeches, mentorship sessions, workshops, and networking opportunities. The event concludes with project presentations and an awards ceremony."
    },
    {
      question: "Are there any costs to participate?",
      answer: "No, participation is completely free! This includes access to all resources, meals, and networking events throughout the hackathon weekend."
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600">Got questions? We've got answers.</p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-gray-50 rounded-lg px-6 border-none"
            >
              <AccordionTrigger className="text-left font-semibold text-gray-900 hover:no-underline py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
