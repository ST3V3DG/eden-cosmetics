import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function FAQSection() {
	const faqs = [
		{
			question: "What states do you serve GLP-1 programs?",
			answer: "Our GLP-1 programs are available in most states across the US. Please contact us to verify availability in your specific location.",
		},
		{
			question: "Do you take insurance?",
			answer: "We accept FSA and HSA for all our plans. However, we currently do not accept traditional insurance plans.",
		},
		{
			question: "What medications do your doctors prescribe?",
			answer: "Our doctors prescribe FDA-approved medications including Semaglutide, which is the same active ingredient as Wegovy® and Ozempic®.",
		},
		{
			question: 'What is our "Same Price at Every Dose" guarantee?',
			answer: "We guarantee the same price regardless of the dosage you need, so you never have to worry about increasing costs as your treatment progresses.",
		},
		{
			question: "Do your plans include prescriptions and medications?",
			answer: "Yes, all our plans include both the prescription and the medication delivered directly to your door.",
		},
	];

	return (
		<section className="bg-gray-50 pb-8">
			<div className="max-w-5xl mx-auto px-6">
				<Accordion type="single" collapsible className="space-y-4">
					{faqs.map((faq, index) => (
						<AccordionItem
							key={index}
							value={`item-${index}`}
							className="bg-white rounded-3xl px-14 py-8 shadow-[2px_4px_12px_rgba(0,0,0,0.08)] border-none"
						>
							<AccordionTrigger className="text-zinc-900 text-2xl font-semibold hover:no-underline text-left">
								{faq.question}
							</AccordionTrigger>
							<AccordionContent className="text-zinc-900/80 text-lg pt-4">{faq.answer}</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>
			</div>
		</section>
	);
}
