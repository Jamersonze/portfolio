import ContactForm from "@/components/ContactForm";
import PageIntro from "@/components/PageIntro";

export default () => 
<main className="h-full bg-primary/30 py-36 flex items-center">
        <article className="container mx-auto">
                <section className='flex flex-col items-center gap-x-8'>
                        <PageIntro title="Let's " titleHighlight="connect." />
                        <ContactForm />
                </section>
        </article>
</main>