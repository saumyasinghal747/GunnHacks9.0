import Section from './Section';
import Question from './Question';


export default function FAQ() {
    return (
        <Section red title="FAQ" id="faq">
            <div className="grid sm:grid-cols-2 text-left">
                <Question q="What is a hackathon?">
                    Hackathons are where your crazy idea becomes reality. Students work in teams of up to four for 24
                    hours to create something amazing. Build anything — there are no restrictions on what you can create.
                    Dive in and make the most incredible thing you can alongside fellow creators.
                </Question>
                <Question q="Who can attend?">
                    Any high schoolers (or below!) can attend GunnHacks. Unfortunately, we cannot allow college students
                    to attend this time around, and we cannot ship swag/prizes internationally.
                    International participants are not eligible for prizes or swag.
                </Question>
                <Question q="What if I don’t know how to code?">
                    All students regardless of coding ability or experience are welcome. Hackathons are a great place to
                    learn, so come and build your first app, website, or anything else! We’ll also have workshops
                    for you to start off or learn something new.
                </Question>
                <Question q="What can I build?">
                    Web, mobile, hardware, you name it — any type of project is welcome. Projects will be judged based
                    on creativity, technical difficulty, polish, and utility by a panel of industry judges.
                </Question>
                {/* Update with team formation event info when that becomes available */}
                <Question q="How big should teams be?">
                    We highly encourage you to build with a team. Teamwork is deeply rooted in the hacking ethos, and
                    you’ll have a better time building with your brightest peers. Teams should consist of no more
                    than four people.
                </Question>
                <Question q="What if I don’t have a team?">
                    No problem! Many hackers do not have a fully-formed team or hack concept before the event begins. We
                    will be hosting team-forming activities before hacking begins to help you find the perfect match. If
                    you’re a first-time hacker, there will be many others looking for team members with whom you can work.
                </Question>
                <Question q="How much does it cost?">
                    Participation in GunnHacks is completely free. However, due to the{/* online */} nature of the
                    event, we recommend ownership of a computer{/* and access to the internet */}.
                </Question>
                <Question q="Do I have to work the whole time?">
                    No, not at all! We will have fun activities and workshops you can participate in when
                    you want to take a break.
                </Question>
                {/*
                <Question q="Where is GunnHacks?">
                    Due to the pandemic, GunnHacks 8.0 will be held online for all participants.
                </Question>
                <Question q="When does registration close?">
                    Registration will close on February 4th, 2022 at 11:59pm PST, when the hackathon begins.
                </Question>
                <Question q="What do I need to submit?">
                    You need to submit a DevPost project to https://gunnhacks8.devpost.com that includes a
                    1-3 minute demo video and a public link to your code (GitHub/GitLab/Replit).
                </Question>
                */}
                <Question q="What if I have another question?">
                    We love questions! Please feel free to reach out to us at <a href="mailto:ghshacks@gmail.com">ghshacks@gmail.com</a>.
                </Question>
            </div>
        </Section>
    )
}
