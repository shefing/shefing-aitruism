'use client';

import { useState } from 'react';

interface DataFlow {
  from: string;
  to: string;
  label: string;
  description: string;
  color: string;
  colorHex: string;
}

export function UserEnvironmentDiagram() {
  const [hoveredFlow, setHoveredFlow] = useState<string | null>(null);

  const dataFlows: DataFlow[] = [
    {
      from: 'agentic-app',
      to: 'llm-gateway',
      label: 'Prompts',
      description: 'Agentic App sends prompts to LLM Gateway for monitoring and routing',
      color: 'from-blue-500 to-blue-400',
      colorHex: '#3b82f6',
    },
    {
      from: 'llm-gateway',
      to: 'external-llm',
      label: 'Routed Prompts & Responses',
      description: 'LLM Gateway routes prompts to external LLMs and returns responses',
      color: 'from-blue-500 to-blue-400',
      colorHex: '#3b82f6',
    },
    {
      from: 'agentic-app',
      to: 'mcp-monitor',
      label: 'Tool Calls',
      description: 'Agentic App sends tool calls to MCP Monitor for observation',
      color: 'from-purple-500 to-purple-400',
      colorHex: '#a855f7',
    },
    {
      from: 'mcp-monitor',
      to: 'mcp-tools',
      label: 'Tool Execution',
      description: 'MCP Monitor forwards tool calls to MCP Tools and returns results',
      color: 'from-purple-500 to-purple-400',
      colorHex: '#a855f7',
    },
    {
      from: 'agentic-app',
      to: 'rag-resources',
      label: 'Knowledge Queries',
      description: 'Agentic App queries RAG/Resources for knowledge retrieval',
      color: 'from-emerald-500 to-emerald-400',
      colorHex: '#10b981',
    },
    {
      from: 'control-plane',
      to: 'llm-gateway',
      label: 'Policy Control',
      description: 'Control Plane Platform monitors and controls LLM Gateway via policies',
      color: 'from-orange-500 to-orange-400',
      colorHex: '#f97316',
    },
    {
      from: 'control-plane',
      to: 'mcp-monitor',
      label: 'Policy Control',
      description: 'Control Plane Platform controls MCP Monitor via policies',
      color: 'from-amber-500 to-amber-400',
      colorHex: '#f59e0b',
    },
    {
      from: 'control-plane',
      to: 'rag-resources',
      label: 'Validation Queries',
      description: 'Control Plane Platform queries RAG for validation of Agentic app behavior',
      color: 'from-rose-500 to-rose-400',
      colorHex: '#f43f5e',
    },
  ];

  const renderSVGConnections = () => {
    return null;
  };

  return (
    <div className="w-full bg-gradient-to-br from-slate-50 to-blue-50 p-12 rounded-lg">
      <h2 className="text-3xl font-bold text-slate-900 mb-2">Omniguard Architecture Diagram</h2>
      <p className="text-slate-600 mb-12 text-lg">
        AI Trust Platform architecture
      </p>

      <div className="relative w-full flex gap-8 items-center">
        <div className="flex flex-col items-center gap-3">
          <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg border-4 border-white">
            <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="text-center bg-blue-50 px-3 py-1 rounded-lg border border-blue-200">
            <h4 className="text-sm font-bold text-blue-900">Agentic App User</h4>
          </div>
        </div>

        {/* Left Side - All Component Boxes in 2-column grid */}
        <div className="bg-white rounded-2xl p-6 border-2 border-slate-300 shadow-lg" style={{ width: '480px' }}>
          <div className="grid grid-cols-2 gap-4">
            {/* Agentic App */}
            <div className="bg-white border-2 border-blue-500 rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-base">🤖</span>
                </div>
                <h3 className="text-sm font-bold text-slate-900">Agentic App</h3>
              </div>
              <p className="text-slate-600 text-xs leading-relaxed">
                AI application that orchestrates interactions with external systems
              </p>
            </div>

            {/* App Sidecar */}
            <div className="bg-cyan-50 border-2 border-cyan-500 rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-cyan-100 rounded-lg flex items-center justify-center">
                  <span className="text-base">📡</span>
                </div>
                <h3 className="text-sm font-bold text-slate-900">App Sidecar</h3>
              </div>
              <p className="text-slate-600 text-xs leading-relaxed">
                Deep behavioral analysis via OTEL and more
              </p>
            </div>

            {/* LLM Gateway */}
            <div className="bg-cyan-50 border-2 border-cyan-500 rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-cyan-100 rounded-lg flex items-center justify-center">
                  <span className="text-base">🛡️</span>
                </div>
                <h3 className="text-sm font-bold text-slate-900">LLM Gateway</h3>
              </div>
              <p className="text-slate-600 text-xs leading-relaxed">
                Monitors and routes all prompts between Agentic App and external LLMs
              </p>
            </div>

            {/* MCP Monitor */}
            <div className="bg-cyan-50 border-2 border-cyan-500 rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-cyan-100 rounded-lg flex items-center justify-center">
                  <span className="text-base">🔍</span>
                </div>
                <h3 className="text-sm font-bold text-slate-900">MCP Monitor</h3>
              </div>
              <p className="text-slate-600 text-xs leading-relaxed">
                Observes and controls all tool invocations via MCP
              </p>
            </div>

            {/* External LLMs */}
            <div className="bg-white border-2 border-blue-400 rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-base">🧠</span>
                </div>
                <h3 className="text-sm font-bold text-slate-900">External LLMs</h3>
              </div>
              <p className="text-slate-600 text-xs leading-relaxed mb-1">
                Third-party language models providing AI reasoning
              </p>
              <div className="text-xs text-slate-500">
                <span className="font-semibold">Providers:</span> OpenAI, Anthropic...
              </div>
            </div>

            {/* MCP Tools */}
            <div className="bg-white border-2 border-purple-500 rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                  <span className="text-base">⚙️</span>
                </div>
                <h3 className="text-sm font-bold text-slate-900">MCP Tools</h3>
              </div>
              <p className="text-slate-600 text-xs leading-relaxed">
                Model Context Protocol tools for external actions
              </p>
            </div>

            {/* RAG / Resources */}
            <div className="bg-white border-2 border-emerald-500 rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <span className="text-base">📚</span>
                </div>
                <h3 className="text-sm font-bold text-slate-900">RAG / Resources</h3>
              </div>
              <p className="text-slate-600 text-xs leading-relaxed">
                Knowledge base and retrieval-augmented generation system
              </p>
            </div>
          </div>
        </div>

        <div className="flex-1 bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-2xl p-6 border-2 border-cyan-500 shadow-xl">
          <div className="flex items-center justify-center gap-4 mb-3">
            <div className="px-3 py-1 bg-cyan-100 border border-cyan-400 rounded-lg text-cyan-700 text-xs font-semibold">
              Rules
            </div>
            <div className="w-10 h-10 bg-cyan-200 rounded-full flex items-center justify-center">
              <span className="text-2xl">⚙️</span>
            </div>
            <div className="px-3 py-1 bg-cyan-100 border border-cyan-400 rounded-lg text-cyan-700 text-xs font-semibold">
              Audit logs
            </div>
          </div>

          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-slate-900 mb-1">Control Plane Platform</h3>
            <p className="text-slate-600 text-sm">Central orchestration & policy hub</p>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {/* Row 1: Discovery, Policy, Observability */}
            <div className="bg-white rounded-lg p-4 border border-slate-300 hover:shadow-md transition-shadow">
              <div className="flex flex-col items-center text-center">
                <span className="text-3xl mb-2">🔍</span>
                <h4 className="text-sm font-bold text-slate-900 mb-1">Discovery</h4>
                <p className="text-xs text-slate-600">Registry</p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 border border-slate-300 hover:shadow-md transition-shadow">
              <div className="flex flex-col items-center text-center">
                <span className="text-3xl mb-2">⚖️</span>
                <h4 className="text-sm font-bold text-slate-900 mb-1">Policy</h4>
                <p className="text-xs text-slate-600">OPA/Cedar</p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 border border-slate-300 hover:shadow-md transition-shadow">
              <div className="flex flex-col items-center text-center">
                <span className="text-3xl mb-2">📊</span>
                <h4 className="text-xs font-bold text-slate-900 mb-1 break-words">Observability</h4>
                <p className="text-xs text-slate-600">Dashboard</p>
              </div>
            </div>

            <div className="col-span-3 bg-white rounded-lg p-6 border-2 border-slate-300 hover:shadow-xl transition-shadow">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full flex items-center justify-center mb-3 shadow-lg">
                  <span className="text-4xl">🧠</span>
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">JudgeLLMs</h4>
                <p className="text-sm text-slate-700 font-medium mb-1">AI-Powered Security Evaluation</p>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Llama Firewall, NVidia Nemo, MS Presidio
                </p>
              </div>
            </div>

            {/* Row 3: RAG Client, Analytics, Security */}
            <div className="bg-white rounded-lg p-4 border border-slate-300 hover:shadow-md transition-shadow">
              <div className="flex flex-col items-center text-center">
                <span className="text-3xl mb-2">✓</span>
                <h4 className="text-sm font-bold text-slate-900 mb-1">RAG Client</h4>
                <p className="text-xs text-slate-600">Validation</p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 border border-slate-300 hover:shadow-md transition-shadow">
              <div className="flex flex-col items-center text-center">
                <span className="text-3xl mb-2">📝</span>
                <h4 className="text-sm font-bold text-slate-900 mb-1">Analytics</h4>
                <p className="text-xs text-slate-600">Reports</p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 border border-slate-300 hover:shadow-md transition-shadow">
              <div className="flex flex-col items-center text-center">
                <span className="text-3xl mb-2">🚨</span>
                <h4 className="text-sm font-bold text-slate-900 mb-1">Security</h4>
                <p className="text-xs text-slate-600">SIEM Bus</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-3">
          <div className="w-24 h-24 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center shadow-lg border-4 border-cyan-200">
            <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="text-center bg-cyan-50 px-3 py-1 rounded-lg border border-cyan-300">
            <h4 className="text-sm font-bold text-cyan-900">Omniguard User</h4>
          </div>
        </div>

        {/* SVG Connections Overlay - Hidden for now */}
        <div className="absolute inset-0 pointer-events-none">
          {renderSVGConnections()}
        </div>

        {/* Tooltips - Hidden since arrows are hidden */}
        {hoveredFlow === 'llm-flow' && (
          <div className="absolute top-4 left-64 z-30 bg-white rounded-lg p-3 shadow-lg border border-blue-200 w-52">
            <div className="text-sm font-bold text-blue-600 mb-1">Prompts & Responses</div>
            <p className="text-xs text-slate-600">Agentic App → LLM Gateway → External LLMs</p>
          </div>
        )}
        {hoveredFlow === 'mcp-flow' && (
          <div className="absolute top-40 left-48 z-30 bg-white rounded-lg p-3 shadow-lg border border-purple-200 w-52">
            <div className="text-sm font-bold text-purple-600 mb-1">Tool Calls & Execution</div>
            <p className="text-xs text-slate-600">Agentic App → MCP Monitor → MCP Tools</p>
          </div>
        )}
        {hoveredFlow === 'rag-flow' && (
          <div className="absolute bottom-32 left-64 z-30 bg-white rounded-lg p-3 shadow-lg border border-emerald-200 w-52">
            <div className="text-sm font-bold text-emerald-600 mb-1">Knowledge Queries</div>
            <p className="text-xs text-slate-600">Agentic App queries RAG/Resources for knowledge retrieval</p>
          </div>
        )}
        {hoveredFlow === 'cp-to-gw' && (
          <div className="absolute top-12 right-96 z-30 bg-white rounded-lg p-3 shadow-lg border border-orange-200 w-52">
            <div className="text-sm font-bold text-orange-600 mb-1">Policy Control</div>
            <p className="text-xs text-slate-600">Control Plane monitors and controls LLM Gateway</p>
          </div>
        )}
        {hoveredFlow === 'cp-to-monitor' && (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 bg-white rounded-lg p-3 shadow-lg border border-amber-200 w-52">
            <div className="text-sm font-bold text-amber-600 mb-1">Policy Control</div>
            <p className="text-xs text-slate-600">Control Plane controls MCP Monitor</p>
          </div>
        )}
        {hoveredFlow === 'cp-to-rag' && (
          <div className="absolute bottom-16 right-96 z-30 bg-white rounded-lg p-3 shadow-lg border border-rose-200 w-52">
            <div className="text-sm font-bold text-rose-600 mb-1">Validation Queries</div>
            <p className="text-xs text-slate-600">Control Plane queries RAG for validation</p>
          </div>
        )}
      </div>

      {/* Data Flows Legend */}
      <div className="bg-white rounded-lg border border-slate-200 p-8 mt-12">
        <h3 className="text-lg font-bold text-slate-900 mb-6">Data Flows</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {dataFlows.map((flow, index) => (
            <div key={index} className="border-l-4 border-slate-300 pl-4">
              <div className={`text-sm font-bold bg-gradient-to-r ${flow.color} bg-clip-text text-transparent mb-2`}>
                {flow.label}
              </div>
              <p className="text-sm text-slate-600">{flow.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
