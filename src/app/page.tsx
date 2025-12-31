import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { ArrowRight, Sparkles, Heart, BookOpen } from "lucide-react";
import Image from "next/image";
import { BrandSparkle } from "@/components/icons/CustomIcons";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      {/* Hero Section */}
      <section className="relative container mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block rounded-full bg-secondary/50 px-4 py-1.5 text-sm font-semibold text-stone-800 mb-2">
              Guidance, not guilt.
            </div>
            <h1 className="text-4xl md:text-7xl font-serif text-stone-900 leading-tight">
              Tender support for the messy parts of motherhood.
            </h1>
            <p className="text-xl text-stone-700 leading-relaxed max-w-lg">
              Practical scripts, boundary guides, and unbiased advice for when you just need a straight answer (and a hug).
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button href="/tools/boundary-generator" size="lg" className="rounded-full px-8 shadow-md hover:shadow-lg transition-all bg-stone-900 text-white flex items-center gap-2">
                <BrandSparkle className="w-4 h-4 text-primary" /> Try Script Generator
              </Button>
              <Button href="/advice" variant="outline" size="lg" className="rounded-full px-8 border-2">
                Browse Advice <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-accent/30 rounded-[3rem] rotate-3 blur-xl -z-10"></div>
            <img
              src="/hero.png"
              alt="Tender Guidance Hero"
              className="w-full h-auto rounded-[2.5rem] shadow-2xl border-4 border-white"
            />
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="rounded-3xl border-none bg-white shadow-xl shadow-stone-200/50 hover:-translate-y-1 transition-transform duration-300">
            <CardHeader>
              <div className="w-12 h-12 bg-secondary rounded-2xl flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-stone-700" />
              </div>
              <CardTitle className="font-serif text-2xl">Zero Judgment</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-stone-700 leading-relaxed">
                We believe you are the expert on your baby. We're just here to give you the tools and confidence to trust yourself.
              </p>
            </CardContent>
          </Card>
          <Card className="rounded-3xl border-none bg-white shadow-xl shadow-stone-200/50 hover:-translate-y-1 transition-transform duration-300">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/30 rounded-2xl flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-stone-700" />
              </div>
              <CardTitle className="font-serif text-2xl">Scripts to Say</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-stone-700 leading-relaxed">
                Freeze up when people ask awkward questions? We give you exact scripts to handle family, work, and strangers.
              </p>
            </CardContent>
          </Card>
          <Card className="rounded-3xl border-none bg-white shadow-xl shadow-stone-200/50 hover:-translate-y-1 transition-transform duration-300">
            <CardHeader>
              <div className="w-12 h-12 bg-accent rounded-2xl flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-stone-700" />
              </div>
              <CardTitle className="font-serif text-2xl">Digital Tools</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-stone-700 leading-relaxed">
                Beautifully designed PDF packets and prints to help you manage boundaries and mental load.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Popular Topics */}
      <section className="container mx-auto px-6 text-center py-12">
        <h2 className="text-4xl font-serif font-bold mb-10 text-stone-900">What's on your mind?</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {["Boundaries", "Body Comments", "Work", "Birth Preferences", "Anxiety", "Partner Support", "Sleep", "Feeding"].map((topic) => (
            <Link key={topic} href={`/advice?search=${topic}`} className="bg-white border-2 border-stone-100 px-6 py-3 rounded-full text-stone-700 hover:bg-stone-50 hover:border-primary/50 transition-all font-medium shadow-sm hover:shadow-md">
              {topic}
            </Link>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="container mx-auto px-6 pb-20">
        <div className="bg-stone-900 text-stone-50 rounded-[3rem] p-10 md:p-20 text-center max-w-5xl mx-auto relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <svg viewBox="0 0 100 100" className="w-full h-full"><circle cx="0" cy="0" r="50" fill="white" /></svg>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-stone-50">Get the "Script of the Week"</h2>
          <p className="text-stone-200 mb-10 max-w-xl mx-auto text-lg">
            One awkward situation, one perfect response. Delivered to your inbox every Tuesday. No spam, we promise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto relative z-10">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-6 py-4 rounded-full text-stone-900 bg-white focus:outline-none focus:ring-4 focus:ring-primary/50"
            />
            <Button variant="secondary" size="lg" className="rounded-full px-8 font-bold">Subscribe</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
