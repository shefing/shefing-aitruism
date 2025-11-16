'use client';

import { useState } from 'react';

interface Component {
  id: string;
  name: string;
  role: string;
  description: string;
  type: 'app' | 'monitoring' | 'gateway' | 'external' | 'platform';
  capabilities: string[];
  security: string;
}

const components: Component[] = [
  // Core Application
  {
    id: 'agentic-app',
    name: 'Agentic App',
    role: 'Core Processing',
    description: 'Your AI agent application being monitored and controlled',
    type: 'app',
    capabilities: [
      'Executes AI workflows',
      'Initiates LLM queries',
      'Calls MCP tools',
      'Queries knowledge base'
    ],
    security: 'All interactions monitored and controlled by platform',
  },
  {
    id: 'sidecar',
    name: 'Sidecar',
    role: 'Local Monitoring',
    description: 'Captures telemetry via eBPF and system-level monitoring',
    type: 'monitoring',
    capabilities: [
      'Deep system observability',
      'System call monitoring',
      'Performance telemetry',
      'Local event capture'
    ],
    security: 'Non-invasive eBPF-based monitoring',
  },

  // Gateway/Control Elements
  {
    id: 'llm-gateway',
    name: 'LLM Gateway',
    role: 'Traffic Control',
    description: 'Routes and controls all LLM communication',
    type: 'gateway',
    capabilities: [
      'Real-time prompt scanning',
      'Response filtering',
      'Sensitive data redaction',
      'Request blocking'
    ],
    security: 'Intercepts and validates all LLM traffic',
  },
  {
    id: 'mcp-monitor',
    name: 'MCP Monitor',
    role: 'Tool Control',
    description: 'Monitors and controls MCP tool invocations',
    type: 'gateway',
    capabilities: [
      'Tool execution validation',
      'Call authorization',
      'Tool invocation blocking',
      'Execution logging'
    ],
    security: 'Prevents unauthorized tool executions',
  },
  {
    id: 'rag-client',
    name: 'RAG Client',
    role: 'Knowledge Validation',
    description: 'Validates and controls knowledge base access',
    type: 'gateway',
    capabilities: [
      'Information validation',
      'Source verification',
      'Access control',
      'Query filtering'
    ],
    security: 'Ensures grounded access to trusted sources',
  },

  // External Systems
  {
    id: 'external-llm',
    name: 'External LLMs',
    role: 'AI Providers',
    description: 'OpenAI, Anthropic, Google, Meta, and other LLM providers',
    type: 'external',
    capabilities: [
      'Language inference',
      'Prompt completion',
      'Multi-turn reasoning',
      'Fine-tuned models'
    ],
    security: 'Accessed only through LLM Gateway',
  },
  {
    id: 'mcp',
    name: 'MCP Tools',
    role: 'Tool Execution',
    description: 'Model Context Protocol - External tools and integrations',
    type: 'external',
    capabilities: [
      'External tool execution',
      'API integrations',
      'Function calling',
      'Plugin ecosystem'
    ],
    security: 'Monitored and blocked by MCP Monitor',
  },
  {
    id: 'rag',
    name: 'RAG System',
    role: 'Knowledge Base',
    description: 'Vector DB and knowledge retrieval system',
    type: 'external',
    capabilities: [
      'Semantic search',
      'Vector similarity',
      'Document retrieval',
      'Knowledge grounding'
    ],
    security: 'Access validated by RAG Client',
  },

  // Control Plane
  {
    id: 'control-plane',
    name: 'Control Plane Platform',
    role: 'Central Management & Security',
    description: 'Aggregated platform managing policies, monitoring, and security decisions',
    type: 'platform',
    capabilities: [
      'JudgeLLMs (Llama Firewall, Nemo, Presidio)',
      'Policy Engine (OPA/Cedar)',
      'Vector DB & Embeddings',
      'Dashboard & Visualization',
      'Secrets Vault',
      'SIEM & Audit Logs'
    ],
    security: 'Centralized policy enforcement and compliance management',
  },
];

const getColorForType = (type: string) => {
  const colors: Record<string, string> = {
    app: 'bg-gradient-to-br from-blue-50 to-blue-100 border-blue-300',
    monitoring: 'bg-gradient-to-br from-cyan-50 to-cyan-100 border-cyan-300',
    gateway: 'bg-gradient-to-br from-teal-50 to-teal-100 border-teal-300',
    external: 'bg-gradient-to-br from-indigo-50 to-indigo-100 border-indigo-300',
    platform: 'bg-gradient-to-br from-purple-50 to-purple-100 border-purple-300',
  };
  return colors[type] || colors.app;
};

const getColorDotForType = (type: string) => {
  const colors: Record<string, string> = {
    app: 'bg-blue-500',
    monitoring: 'bg-cyan-500',
    gateway: 'bg-teal-500',
    external: 'bg-indigo-500',
    platform: 'bg-purple-500',
  };
  return colors[type] || colors.app;
};

export default function ArchitectureDiagram() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-8">
      {/* Header */}
      <div className="mb-12 max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold text-slate-900 mb-3">
          AITruism Architecture
        </h1>
        <p className="text-lg text-slate-600">
          AI Trust, Risk & Security Management Platform
        </p>
      </div>

      {/* Main Diagram */}
      <div className="max-w-7xl mx-auto">
        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-12">
          {/* Color Legend */}
          <div className="grid grid-cols-5 gap-4 mb-12">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-blue-500" />
              <span className="text-sm font-medium text-slate-600">Core App</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-cyan-500" />
              <span className="text-sm font-medium text-slate-600">Monitoring</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-teal-500" />
              <span className="text-sm font-medium text-slate-600">Control</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-indigo-500" />
              <span className="text-sm font-medium text-slate-600">External</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-purple-500" />
              <span className="text-sm font-medium text-slate-600">Platform</span>
            </div>
          </div>

          {/* Data Flow Layout */}
          <div className="grid grid-cols-12 gap-8 items-start">
            {/* Left: Core Application Stack */}
            <div className="col-span-2 space-y-4">
              <ComponentBlock
                component={components.find(c => c.id === 'agentic-app')!}
                isExpanded={expandedId === 'agentic-app'}
                onToggle={() => setExpandedId(expandedId === 'agentic-app' ? null : 'agentic-app')}
              />
              <ComponentBlock
                component={components.find(c => c.id === 'sidecar')!}
                isExpanded={expandedId === 'sidecar'}
                onToggle={() => setExpandedId(expandedId === 'sidecar' ? null : 'sidecar')}
              />
            </div>

            {/* Center Left: Control/Gateway Elements */}
            <div className="col-span-2 space-y-4">
              <ComponentBlock
                component={components.find(c => c.id === 'llm-gateway')!}
                isExpanded={expandedId === 'llm-gateway'}
                onToggle={() => setExpandedId(expandedId === 'llm-gateway' ? null : 'llm-gateway')}
              />
              <ComponentBlock
                component={components.find(c => c.id === 'mcp-monitor')!}
                isExpanded={expandedId === 'mcp-monitor'}
                onToggle={() => setExpandedId(expandedId === 'mcp-monitor' ? null : 'mcp-monitor')}
              />
              <ComponentBlock
                component={components.find(c => c.id === 'rag-client')!}
                isExpanded={expandedId === 'rag-client'}
                onToggle={() => setExpandedId(expandedId === 'rag-client' ? null : 'rag-client')}
              />
            </div>

            {/* Center Right: External Systems */}
            <div className="col-span-2 space-y-4">
              <ComponentBlock
                component={components.find(c => c.id === 'external-llm')!}
                isExpanded={expandedId === 'external-llm'}
                onToggle={() => setExpandedId(expandedId === 'external-llm' ? null : 'external-llm')}
              />
              <ComponentBlock
                component={components.find(c => c.id === 'mcp')!}
                isExpanded={expandedId === 'mcp'}
                onToggle={() => setExpandedId(expandedId === 'mcp' ? null : 'mcp')}
              />
              <ComponentBlock
                component={components.find(c => c.id === 'rag')!}
                isExpanded={expandedId === 'rag'}
                onToggle={() => setExpandedId(expandedId === 'rag' ? null : 'rag')}
              />
            </div>

            {/* Right: Control Plane Platform */}
            <div className="col-span-3">
              <ComponentBlock
                component={components.find(c => c.id === 'control-plane')!}
                isExpanded={expandedId === 'control-plane'}
                onToggle={() => setExpandedId(expandedId === 'control-plane' ? null : 'control-plane')}
                isLarge={true}
              />
            </div>

            {/* Connection Lines */}
            <svg className="absolute inset-0 w-full h-96 pointer-events-none" style={{ top: '300px' }}>
              {/* Agentic App to Gateways */}
              <line x1="25%" y1="100" x2="40%" y2="100" stroke="#94a3b8" strokeWidth="1" strokeDasharray="5,5" />
              {/* Agentic App to LLM Gateway */}
              <line x1="40%" y1="100" x2="50%" y2="80" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrowhead)" />
              {/* Agentic App to MCP Monitor */}
              <line x1="40%" y1="100" x2="50%" y2="130" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrowhead)" />
              {/* Agentic App to RAG Client */}
              <line x1="40%" y1="100" x2="50%" y2="180" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrowhead)" />
              
              {/* Gateways to External Systems */}
              <line x1="60%" y1="80" x2="70%" y2="60" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrowhead)" />
              <line x1="60%" y1="130" x2="70%" y2="130" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrowhead)" />
              <line x1="60%" y1="180" x2="70%" y2="200" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrowhead)" />
              
              {/* All to Control Plane */}
              <line x1="40%" y1="100" x2="80%" y2="200" stroke="#a78bfa" strokeWidth="2" markerEnd="url(#arrowhead-purple)" />
              <line x1="60%" y1="130" x2="80%" y2="200" stroke="#a78bfa" strokeWidth="2" markerEnd="url(#arrowhead-purple)" />
              <line x1="70%" y1="130" x2="80%" y2="200" stroke="#a78bfa" strokeWidth="1" strokeDasharray="5,5" />

              <defs>
                <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                  <polygon points="0 0, 10 3, 0 6" fill="#94a3b8" />
                </marker>
                <marker id="arrowhead-purple" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                  <polygon points="0 0, 10 3, 0 6" fill="#a78bfa" />
                </marker>
              </defs>
            </svg>
          </div>
        </div>

        {/* Data Flow Description */}
        <div className="mt-8 grid grid-cols-3 gap-6">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h3 className="font-semibold text-blue-900 mb-2 text-sm">Primary Data Flow</h3>
            <p className="text-xs text-blue-800">
              Agentic App → LLM Gateway → External LLMs (with prompt scanning and response filtering)
            </p>
          </div>
          <div className="bg-teal-50 border border-teal-200 rounded-lg p-4">
            <h3 className="font-semibold text-teal-900 mb-2 text-sm">Secondary Flows</h3>
            <p className="text-xs text-teal-800">
              App → MCP Monitor → Tools, and App → RAG Client → Knowledge Base
            </p>
          </div>
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
            <h3 className="font-semibold text-purple-900 mb-2 text-sm">Control & Monitoring</h3>
            <p className="text-xs text-purple-800">
              All flows monitored by Control Plane Platform with centralized policy enforcement
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

interface ComponentBlockProps {
  component: Component;
  isExpanded: boolean;
  onToggle: () => void;
  isLarge?: boolean;
}

function ComponentBlock({ component, isExpanded, onToggle, isLarge }: ComponentBlockProps) {
  return (
    <div
      onClick={onToggle}
      className={`
        rounded-lg border-2 p-4 cursor-pointer transition-all duration-200
        ${getColorForType(component.type)}
        ${isExpanded ? 'shadow-lg' : 'shadow-sm hover:shadow-md'}
      `}
    >
      <div className="flex items-start gap-2 mb-2">
        <div className={`w-2 h-2 rounded-full mt-1 flex-shrink-0 ${getColorDotForType(component.type)}`} />
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-slate-900 text-sm leading-tight">
            {component.name}
          </h3>
          <p className="text-xs text-slate-600 font-medium">{component.role}</p>
        </div>
      </div>

      {/* Always show description */}
      <p className="text-xs text-slate-700 leading-relaxed mb-3">
        {component.description}
      </p>

      <div className="text-xs space-y-1 mb-2">
        <p className="font-semibold text-slate-800">Key Capabilities:</p>
        <ul className="list-disc list-inside space-y-0.5 text-slate-700">
          {component.capabilities.slice(0, isExpanded ? component.capabilities.length : 2).map((cap, i) => (
            <li key={i}>{cap}</li>
          ))}
          {!isExpanded && component.capabilities.length > 2 && (
            <li className="text-slate-500 italic">+{component.capabilities.length - 2} more</li>
          )}
        </ul>
      </div>

      {/* Security info */}
      <div className="text-xs border-t border-slate-200 pt-2">
        <p className="font-semibold text-slate-800 mb-1">Security:</p>
        <p className="text-slate-700">{component.security}</p>
      </div>
    </div>
  );
}
