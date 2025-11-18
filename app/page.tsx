'use client';

import { UserEnvironmentDiagram } from '@/components/user-environment';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-stone-100">
      <nav className="bg-white border-b border-stone-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-teal-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">⚡</span>
              </div>
              <span className="text-xl font-bold text-stone-800">AITruism</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#architecture" className="text-stone-600 hover:text-teal-500 px-3 py-2 text-sm font-medium transition-colors">Architecture</a>
              <a href="#gateway" className="text-stone-600 hover:text-teal-500 px-3 py-2 text-sm font-medium transition-colors">Gateway</a>
              <a href="#sidecar" className="text-stone-600 hover:text-teal-500 px-3 py-2 text-sm font-medium transition-colors">Sidecar</a>
              <a href="#enforcement" className="text-stone-600 hover:text-teal-500 px-3 py-2 text-sm font-medium transition-colors">MCP Enforcement</a>
              <a href="#roadmap" className="text-stone-600 hover:text-teal-500 px-3 py-2 text-sm font-medium transition-colors">Roadmap</a>
            </div>
          </div>
        </div>
      </nav>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-stone-900 mb-4 text-balance">
            Omniguard: AI Trust, Risk & Security Management
          </h1>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto text-pretty">
            Interactive guide for architecting a production-grade observability and control plane for Agentic AI Systems
          </p>
        </div>
      </section>

      <section id="architecture" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-stone-900 mb-4">A Unified Architecture for AI Governance</h2>
            <p className="text-lg text-stone-600 max-w-4xl mx-auto text-pretty">
              This framework provides a comprehensive control plane for security, quality, and observability across all AI interactions. 
              Hover over connections to explore data flows between components.
            </p>
          </div>
          
          <UserEnvironmentDiagram />
        </div>
      </section>

      <section id="gateway" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-stone-900 mb-8">LLM Gateway: The First Line of Defense</h2>
          
          <div className="card p-8 mb-8">
            <h3 className="text-2xl font-bold text-stone-900 mb-4">Gateway vs Reverse Proxy</h3>
            <p className="text-stone-700 mb-6">
              For behavioral control, a simple reverse proxy is insufficient. An LLM Gateway operates at the application layer, 
              understanding and acting upon the content of AI interactions.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-stone-50 rounded-lg">
                <div className="text-4xl mb-3">🔍</div>
                <h4 className="font-bold text-stone-900 mb-2">Inspect & Transform</h4>
                <p className="text-sm text-stone-600">
                  Read and modify prompts/responses, mask PII before data leaves your infrastructure
                </p>
              </div>
              <div className="text-center p-6 bg-stone-50 rounded-lg">
                <div className="text-4xl mb-3">🧩</div>
                <h4 className="font-bold text-stone-900 mb-2">Specialized Logic</h4>
                <p className="text-sm text-stone-600">
                  Platform for running security scanners and quality checks on every call
                </p>
              </div>
              <div className="text-center p-6 bg-stone-50 rounded-lg">
                <div className="text-4xl mb-3">🤖</div>
                <h4 className="font-bold text-stone-900 mb-2">LLM-Specific</h4>
                <p className="text-sm text-stone-600">
                  Unified API for 100+ models, API key management, retries and fallbacks
                </p>
              </div>
            </div>
          </div>

          <div className="card p-8">
            <h3 className="text-2xl font-bold text-stone-900 mb-4">Key Gateway Scanners</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-teal-500 pl-4 py-2">
                <h4 className="font-bold text-stone-900">LlamaFirewall: AlignmentCheck</h4>
                <p className="text-sm text-stone-600">
                  Judge LLM ensuring responses are helpful, harmless, and policy-compliant
                </p>
              </div>
              <div className="border-l-4 border-teal-500 pl-4 py-2">
                <h4 className="font-bold text-stone-900">PII Detection (Presidio)</h4>
                <p className="text-sm text-stone-600">
                  Microsoft Presidio for high-accuracy Named Entity Recognition and PII redaction
                </p>
              </div>
              <div className="border-l-4 border-teal-500 pl-4 py-2">
                <h4 className="font-bold text-stone-900">Prompt Injection Prevention</h4>
                <p className="text-sm text-stone-600">
                  Detects malicious instructions and defense evasion techniques
                </p>
              </div>
              <div className="border-l-4 border-teal-500 pl-4 py-2">
                <h4 className="font-bold text-stone-900">Content Moderation</h4>
                <p className="text-sm text-stone-600">
                  Filters toxic, harmful, or inappropriate language in real-time
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="sidecar" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-stone-900 mb-8">Sidecar: Deep Observability & eBPF Monitoring</h2>
          
          <div className="card p-8 mb-8">
            <h3 className="text-2xl font-bold text-stone-900 mb-6">Data Flow Pipeline</h3>
            <div className="space-y-6">
              <div className="demo-step" data-icon="📥">
                <h4 className="font-bold text-stone-900 mb-2">1. Ingestion</h4>
                <p className="text-stone-600">
                  OTEL Collector receives continuous trace data from the Agentic App via gRPC on localhost
                </p>
              </div>
              <div className="demo-step" data-icon="📦">
                <h4 className="font-bold text-stone-900 mb-2">2. Batching</h4>
                <p className="text-stone-600">
                  Batch processor groups spans to optimize processing and network traffic
                </p>
              </div>
              <div className="demo-step" data-icon="⚙️">
                <h4 className="font-bold text-stone-900 mb-2">3. Orchestration</h4>
                <p className="text-stone-600">
                  Custom Go processor evaluates rules and triggers deeper analysis for complex cases
                </p>
              </div>
              <div className="demo-step" data-icon="🔬">
                <h4 className="font-bold text-stone-900 mb-2">4. Specialized Analysis</h4>
                <p className="text-stone-600">
                  Python service uses ML libraries for hallucination detection and semantic validation
                </p>
              </div>
              <div className="demo-step" data-icon="✏️">
                <h4 className="font-bold text-stone-900 mb-2">5. Telemetry Enrichment</h4>
                <p className="text-stone-600">
                  Enriches spans with validation scores and analysis results
                </p>
              </div>
              <div className="demo-step" data-icon="📤">
                <h4 className="font-bold text-stone-900 mb-2">6. Export</h4>
                <p className="text-stone-600">
                  Final enriched telemetry exported to central observability backend (SigNoz/Jaeger)
                </p>
              </div>
            </div>
          </div>

          <div className="card p-8">
            <h3 className="text-2xl font-bold text-stone-900 mb-4">Key Capabilities</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-4 bg-stone-50 rounded-lg">
                <h4 className="font-bold text-stone-900 mb-2">🎯 Hallucination Detection</h4>
                <p className="text-sm text-stone-600">
                  Compares LLM responses against retrieved context using semantic similarity
                </p>
              </div>
              <div className="p-4 bg-stone-50 rounded-lg">
                <h4 className="font-bold text-stone-900 mb-2">🔍 Topic Drift Monitoring</h4>
                <p className="text-sm text-stone-600">
                  Analyzes conversation history to detect when agents go off-topic
                </p>
              </div>
              <div className="p-4 bg-stone-50 rounded-lg">
                <h4 className="font-bold text-stone-900 mb-2">⚡ eBPF Deep Inspection</h4>
                <p className="text-sm text-stone-600">
                  Kernel-level monitoring for uninstrumented code and security analysis
                </p>
              </div>
              <div className="p-4 bg-stone-50 rounded-lg">
                <h4 className="font-bold text-stone-900 mb-2">📊 Business Logic Validation</h4>
                <p className="text-sm text-stone-600">
                  Custom rules engine for enforcing domain-specific constraints
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="enforcement" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-stone-900 mb-8">MCP/Tool Enforcement: The Final Defense Layer</h2>
          
          <div className="card p-8 mb-8">
            <h3 className="text-2xl font-bold text-stone-900 mb-6">The Bank Vault Analogy</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-4 p-4 bg-blue-50 rounded-lg">
                <span className="text-3xl">🚪</span>
                <div>
                  <h4 className="font-bold text-stone-900">LLM Gateway = Front Door Guard</h4>
                  <p className="text-sm text-stone-600">Checks IDs and prevents obvious threats from entering</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-4 bg-purple-50 rounded-lg">
                <span className="text-3xl">📹</span>
                <div>
                  <h4 className="font-bold text-stone-900">Sidecar = Surveillance System</h4>
                  <p className="text-sm text-stone-600">Records activity and detects suspicious patterns</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-4 bg-emerald-50 rounded-lg">
                <span className="text-3xl">🔐</span>
                <div>
                  <h4 className="font-bold text-stone-900">MCP/Tool = Vault Door</h4>
                  <p className="text-sm text-stone-600">Final mandatory authorization at the point of action</p>
                </div>
              </div>
            </div>
          </div>

          <div className="card p-8">
            <h3 className="text-2xl font-bold text-stone-900 mb-4">Dual Enforcement Strategy</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-stone-900 mb-3">Method 1: SDK Integration</h4>
                <p className="text-sm text-stone-600 mb-4">
                  Internal SDK abstracts policy checks. Single line of code protects endpoints.
                </p>
                <pre className="text-xs bg-stone-900 text-stone-100 p-4 rounded overflow-x-auto">
{`from sdk import ToolSecurity

@app.post("/billing_report")
async def run_report(req):
  # SDK queries OPA, throws on deny
  ToolSecurity.enforce(
    user=req.user,
    action="run_report"
  )
  return generate_report()`}
                </pre>
              </div>
              <div>
                <h4 className="font-bold text-stone-900 mb-3">Method 2: Service Mesh</h4>
                <p className="text-sm text-stone-600 mb-4">
                  Unbypassable infrastructure control. Mesh queries OPA before forwarding requests.
                </p>
                <div className="flex items-center justify-center space-x-2 p-6 bg-stone-50 rounded-lg text-sm flex-wrap">
                  <span>🤖 Agent</span>
                  <span>→</span>
                  <span>📦 Mesh</span>
                  <span>→</span>
                  <span>⚖️ OPA</span>
                  <span>→</span>
                  <span>🛠️ Tool</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="roadmap" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-stone-900 mb-8">Implementation Roadmap</h2>
          
          <div className="space-y-8">
            <div className="card p-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-teal-500 text-white rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-stone-900 mb-2">Foundational Control & Visibility</h3>
                  <p className="text-sm text-stone-500 mb-3">1-2 Months</p>
                  <p className="text-stone-700 mb-4">
                    Achieve immediate control over all LLM traffic and establish baseline observability.
                  </p>
                  <ul className="list-disc list-inside text-sm text-stone-600 space-y-1">
                    <li>Deploy LLM Gateway (LiteLLM)</li>
                    <li>Implement PII masking and prompt injection prevention</li>
                    <li>Instrument all agents with OTEL SDK</li>
                    <li>Deploy central observability backend (SigNoz)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="card p-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-teal-500 text-white rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-stone-900 mb-2">Advanced Introspective Monitoring</h3>
                  <p className="text-sm text-stone-500 mb-3">2-3 Months</p>
                  <p className="text-stone-700 mb-4">
                    Prove the sidecar pattern with hallucination detection.
                  </p>
                  <ul className="list-disc list-inside text-sm text-stone-600 space-y-1">
                    <li>Develop Observability Sidecar (OTEL + Python Service)</li>
                    <li>Implement hallucination detection processor</li>
                    <li>Roll out to key RAG-based applications</li>
                    <li>Analyze and refine detection results</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="card p-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-teal-500 text-white rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-stone-900 mb-2">Dynamic Policy Enforcement</h3>
                  <p className="text-sm text-stone-500 mb-3">Ongoing</p>
                  <p className="text-stone-700 mb-4">
                    Mature the sidecar into full-featured policy enforcement engine.
                  </p>
                  <ul className="list-disc list-inside text-sm text-stone-600 space-y-1">
                    <li>Implement custom Rules Engine processor</li>
                    <li>Define declarative business logic validations</li>
                    <li>Develop custom scanners</li>
                    <li>Standardize Agent + Sidecar deployment pattern</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="card p-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-teal-500 text-white rounded-full flex items-center justify-center font-bold">
                  4
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-stone-900 mb-2">Enterprise Hardening & Integration</h3>
                  <p className="text-sm text-stone-500 mb-3">Future</p>
                  <p className="text-stone-700 mb-4">
                    Enterprise-grade AI Control Plane integrated with corporate security.
                  </p>
                  <ul className="list-disc list-inside text-sm text-stone-600 space-y-1">
                    <li>Replace custom rules with formal Policy Engine (OPA)</li>
                    <li>Integrate secure Keystore for PII tokenization (Vault)</li>
                    <li>Stream security events to SIEM via Event Bus (Kafka)</li>
                    <li>Deploy embedded Judge LLMs in gateway/sidecar</li>
                    <li>Integrate eBPF agent for kernel-level monitoring</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-stone-900 text-stone-300">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm">
            © 2025 AITruism - Omniguard AI Trust, Risk & Security Management
          </p>
          <p className="text-xs mt-2 text-stone-500">
            Based on "Architecting a Production-Grade Observability and Control Plane for Agentic AI Systems"
          </p>
        </div>
      </footer>
    </div>
  );
}
