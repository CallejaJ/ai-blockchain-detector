import { AnimatedBackground } from "@/components/animated-background"
import { HeroSection } from "@/components/hero-section"
import { ProblemSection } from "@/components/problem-section"
import { SolutionSection } from "@/components/solution-section"
import { SocialProofSection } from "@/components/social-proof-section"
import { BetaSignupSection } from "@/components/beta-signup-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <AnimatedBackground />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <SocialProofSection />
      <BetaSignupSection />
      <Footer />
    </main>
  )
}
