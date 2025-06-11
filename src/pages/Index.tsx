import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { DollarSign, FileText, Brain, Upload } from "lucide-react";
import { Link } from "react-router-dom";
import { RegisterButton } from "@/components/RegisterButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-white font-sans">
      <nav className="flex justify-between items-center px-8 py-6 bg-white shadow-sm">
        <Link to="/" className="flex flex-col">
          <span className="text-2xl font-light tracking-wide text-blue-900">AGENT PROCESS AUTOMATION</span>
          <span className="text-blue-600 text-sm font-light">Business Benefit Evaluator</span>
        </Link>
        <div className="flex gap-4">
          <Button
            variant="ghost"
            className="text-blue-700 hover:bg-blue-50 font-light"
            asChild
          >
            <Link to="/login">Login</Link>
          </Button>
          <RegisterButton />
        </div>
      </nav>

      <main className="container mx-auto px-8 py-20 text-center">
        <h1 className="text-6xl font-light mb-8 leading-tight">
          <span className="text-blue-900">Agent Process Automation</span>
          <br />
          <span className="text-blue-700">Business Benefit Evaluator</span>
        </h1>
        <p className="text-xl mb-6 text-blue-800 font-light max-w-3xl mx-auto">
          Evaluate and test AI-powered process automation capabilities across various business domains.
        </p>
        <p className="text-lg mb-12 text-blue-600 font-light max-w-2xl mx-auto">
          Upload business process documents and simulate system integration by loading sample data via excels and evaluate AI Agent performance with your own data
        </p>
        <div className="flex justify-center gap-6 flex-wrap">
          <RegisterButton />
          <Button
            variant="outline"
            className="px-10 py-4 rounded-full text-lg border-blue-600 text-blue-600 hover:bg-blue-50 font-light shadow-lg transition-all duration-300"
            asChild
          >
            <Link to="/login">Login</Link>
          </Button>
        </div>

        <section className="mt-32">
          <h2 className="text-4xl font-light mb-16 text-blue-900">The Process Automation Challenge</h2>
          <div className="mb-20 bg-white rounded-2xl shadow-xl border border-blue-100 overflow-hidden">
            <img src="/problem.png" alt="Process Automation Cost Problem Analysis" className="w-full h-auto" />
          </div>
        </section>

        <section className="mt-32">
          <h2 className="text-4xl font-light mb-16 text-blue-900">Key Evaluation Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <Card className="p-8 border-blue-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:transform hover:-translate-y-2 rounded-2xl">
              <CardContent className="space-y-6">
                <div className="h-16 w-16 bg-blue-600 rounded-2xl flex items-center justify-center">
                  <DollarSign className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-light text-blue-900">Cost Savings Potential</h3>
                <p className="text-blue-700 font-light leading-relaxed">
                  Evaluate how AI can streamline business processes, reduce operational costs, and improve efficiency through intelligent automation.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 border-blue-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:transform hover:-translate-y-2 rounded-2xl">
              <CardContent className="space-y-6">
                <div className="h-16 w-16 bg-blue-600 rounded-2xl flex items-center justify-center">
                  <Upload className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-light text-blue-900">Document Intelligence</h3>
                <p className="text-blue-700 font-light leading-relaxed">
                  Test AI's ability to extract and analyze data from your business documents, contracts, and operational data sources.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 border-blue-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:transform hover:-translate-y-2 rounded-2xl">
              <CardContent className="space-y-6">
                <div className="h-16 w-16 bg-blue-600 rounded-2xl flex items-center justify-center">
                  <Brain className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-light text-blue-900">Process Intelligence</h3>
                <p className="text-blue-700 font-light leading-relaxed">
                  Experience how AI can transform business processes by providing intelligent guidance, automation, and optimization across various domains.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mt-32">
          <h2 className="text-4xl font-light mb-16 text-blue-900">Our Solution for Evaluation</h2>
          <div className="grid md:grid-cols-2 gap-12 items-start p-10 bg-blue-50 rounded-3xl shadow-xl border border-blue-100">
            <div>
              <h3 className="text-3xl font-light text-blue-900 mb-6">Process Automation Tech Stack</h3>
              <p className="text-blue-700 mb-8 font-light leading-relaxed">An overview of the technology stack empowering intelligent process automation.</p>
              <img src="/professiona_buyer_tech_stack.png" alt="Professional Buyer Tech Stack" className="rounded-2xl shadow-lg border border-blue-200 w-full h-auto" />
            </div>
            <div>
              <h3 className="text-3xl font-light text-blue-900 mb-6">Core Solution Overview</h3>
              <p className="text-blue-700 mb-8 font-light leading-relaxed">A diagram illustrating the main components and flow of our solution.</p>
              <img src="/solution_overview.png" alt="Solution Overview" className="rounded-2xl shadow-lg border border-blue-200 w-full h-auto" />
            </div>
          </div>
        </section>

        <section className="mt-32 mb-20">
          <h2 className="text-4xl font-light mb-10 text-blue-900 text-center">
            Start Your <span className="text-blue-600">Process Automation Evaluation</span>
          </h2>
          <div className="flex justify-center gap-6 flex-wrap">
            <RegisterButton />
            <Button
              variant="outline"
              className="px-10 py-4 rounded-full text-lg border-blue-600 text-blue-600 hover:bg-blue-50 font-light shadow-lg transition-all duration-300"
              asChild
            >
              <Link to="/login">Already have an account? Login</Link>
            </Button>
            <Button
              variant="outline"
              className="px-10 py-4 rounded-full text-lg border-blue-600 text-blue-600 hover:bg-blue-50 font-light shadow-lg transition-all duration-300"
              onClick={() => window.open('https://github.com/mikkovaltonen/professional_buyer', '_blank', 'noopener,noreferrer')}
            >
              View Full Solution →
            </Button>
          </div>
        </section>

        <section className="mt-32 mb-20">
          <h2 className="text-4xl font-light mb-16 text-blue-900 text-center">About Vuono Group</h2>
          <div className="text-center mt-12">
            <p className="text-blue-700 text-xl mb-8 font-light max-w-2xl mx-auto">
              We optimise processes through data and AI to drive business value. Expert solutions in process mining, business analytics, data engineering, and intelligent automation.
            </p>
            <div className="flex justify-center gap-6">
              <Button
                variant="outline"
                className="px-8 py-3 rounded-full border-blue-600 text-blue-600 hover:bg-blue-50 font-light shadow-lg transition-all duration-300"
                onClick={() => window.open('https://www.vuonogroup.com', '_blank', 'noopener,noreferrer')}
              >
                Visit vuonogroup.com
              </Button>
              <Button
                variant="outline"
                className="px-8 py-3 rounded-full border-blue-600 text-blue-600 hover:bg-blue-50 font-light shadow-lg transition-all duration-300"
                onClick={() => window.open('https://linkedin.com/company/vuono-group', '_blank', 'noopener,noreferrer')}
              >
                LinkedIn
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-blue-900 py-20 mt-20">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
            <div>
              <h3 className="font-light text-lg mb-6 text-white">Services</h3>
              <ul className="space-y-3">
                <li><a href="https://www.vuonogroup.com/services" className="text-blue-200 hover:text-white font-light transition-colors duration-300">Process Mining & Analytics</a></li>
                <li><a href="https://www.vuonogroup.com/services" className="text-blue-200 hover:text-white font-light transition-colors duration-300">Data & AI Engineering</a></li>
                <li><a href="https://www.vuonogroup.com/services" className="text-blue-200 hover:text-white font-light transition-colors duration-300">Automation & Software</a></li>
                <li><a href="https://www.vuonogroup.com/services" className="text-blue-200 hover:text-white font-light transition-colors duration-300">Business Transformation</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-light text-lg mb-6 text-white">Resources</h3>
              <ul className="space-y-3">
                <li><a href="https://www.vuonogroup.com/case-studies" className="text-blue-200 hover:text-white font-light transition-colors duration-300">Case Studies</a></li>
                <li><a href="https://www.vuonogroup.com/insights" className="text-blue-200 hover:text-white font-light transition-colors duration-300">Insights</a></li>
                <li><a href="https://www.vuonogroup.com/blog" className="text-blue-200 hover:text-white font-light transition-colors duration-300">Blog</a></li>
                <li><a href="https://www.vuonogroup.com/podcast" className="text-blue-200 hover:text-white font-light transition-colors duration-300">Podcast</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-light text-lg mb-6 text-white">Contact</h3>
              <ul className="space-y-3">
                <li><a href="https://www.vuonogroup.com/team" className="text-blue-200 hover:text-white font-light transition-colors duration-300">Our Team</a></li>
                <li><a href="https://www.vuonogroup.com/careers" className="text-blue-200 hover:text-white font-light transition-colors duration-300">Careers</a></li>
                <li><a href="https://www.vuonogroup.com/contact" className="text-blue-200 hover:text-white font-light transition-colors duration-300">Contact</a></li>
                <li><a href="https://linkedin.com/company/vuono-group" className="text-blue-200 hover:text-white font-light transition-colors duration-300">LinkedIn</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t border-blue-700 text-center">
            <p className="text-blue-200 font-light">© 2024 Vuono Group Limited. All rights reserved.</p>
            <p className="text-blue-300 font-light mt-2">Helsinki, Finland | hello@vuonogroup.com</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
