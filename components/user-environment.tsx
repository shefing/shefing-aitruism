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
  const [showDataFlows, setShowDataFlows] = useState(false);

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
    if (!showDataFlows) return null;

    return (
      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 10 }}>
        <defs>
          <marker
            id="arrowhead-blue"
            markerWidth="10"
            markerHeight="10"
            refX="9"
            refY="3"
            orient="auto"
          >
            <polygon points="0 0, 10 3, 0 6" fill="#3b82f6" />
          </marker>
          <marker
            id="arrowhead-purple"
            markerWidth="10"
            markerHeight="10"
            refX="9"
            refY="3"
            orient="auto"
          >
            <polygon points="0 0, 10 3, 0 6" fill="#a855f7" />
          </marker>
          <marker
            id="arrowhead-emerald"
            markerWidth="10"
            markerHeight="10"
            refX="9"
            refY="3"
            orient="auto"
          >
            <polygon points="0 0, 10 3, 0 6" fill="#10b981" />
          </marker>
          <marker
            id="arrowhead-orange"
            markerWidth="10"
            markerHeight="10"
            refX="9"
            refY="3"
            orient="auto"
          >
            <polygon points="0 0, 10 3, 0 6" fill="#f97316" />
          </marker>
          <marker
            id="arrowhead-amber"
            markerWidth="10"
            markerHeight="10"
            refX="9"
            refY="3"
            orient="auto"
          >
            <polygon points="0 0, 10 3, 0 6" fill="#f59e0b" />
          </marker>
          <marker
            id="arrowhead-rose"
            markerWidth="10"
            markerHeight="10"
            refX="9"
            refY="3"
            orient="auto"
          >
            <polygon points="0 0, 10 3, 0 6" fill="#f43f5e" />
          </marker>
        </defs>

        {/* Agentic App → LLM Gateway */}
        <path
          d="M 410 125 L 450 125 L 450 220"
          stroke="#3b82f6"
          strokeWidth="2.5"
          fill="none"
          markerEnd="url(#arrowhead-blue)"
          opacity={hoveredFlow === 'app-gateway' ? 1 : 0.7}
          onMouseEnter={() => setHoveredFlow('app-gateway')}
          onMouseLeave={() => setHoveredFlow(null)}
          className="pointer-events-auto cursor-pointer"
        />

        {/* LLM Gateway → External LLMs (horizontal across) */}
        <path
          d="M 470 260 L 540 260 L 540 335"
          stroke="#3b82f6"
          strokeWidth="2.5"
          fill="none"
          markerEnd="url(#arrowhead-blue)"
          opacity={hoveredFlow === 'gateway-llm' ? 1 : 0.7}
          onMouseEnter={() => setHoveredFlow('gateway-llm')}
          onMouseLeave={() => setHoveredFlow(null)}
          className="pointer-events-auto cursor-pointer"
        />

        {/* Agentic App → MCP Monitor */}
        <path
          d="M 270 145 L 270 500"
          stroke="#a855f7"
          strokeWidth="2.5"
          fill="none"
          markerEnd="url(#arrowhead-purple)"
          opacity={hoveredFlow === 'app-mcp' ? 1 : 0.7}
          onMouseEnter={() => setHoveredFlow('app-mcp')}
          onMouseLeave={() => setHoveredFlow(null)}
          className="pointer-events-auto cursor-pointer"
        />

        {/* MCP Monitor → MCP Tools */}
        <path
          d="M 380 540 L 430 540"
          stroke="#a855f7"
          strokeWidth="2.5"
          fill="none"
          markerEnd="url(#arrowhead-purple)"
          opacity={hoveredFlow === 'mcp-tools' ? 1 : 0.7}
          onMouseEnter={() => setHoveredFlow('mcp-tools')}
          onMouseLeave={() => setHoveredFlow(null)}
          className="pointer-events-auto cursor-pointer"
        />

        {/* Agentic App → RAG / Resources */}
        <path
          d="M 230 145 L 230 335"
          stroke="#10b981"
          strokeWidth="2.5"
          fill="none"
          markerEnd="url(#arrowhead-emerald)"
          opacity={hoveredFlow === 'app-rag' ? 1 : 0.7}
          onMouseEnter={() => setHoveredFlow('app-rag')}
          onMouseLeave={() => setHoveredFlow(null)}
          className="pointer-events-auto cursor-pointer"
        />

        {/* Control Plane → LLM Gateway */}
        <path
          d="M 640 240 Q 580 240 500 240"
          stroke="#f97316"
          strokeWidth="2.5"
          fill="none"
          markerEnd="url(#arrowhead-orange)"
          opacity={hoveredFlow === 'cp-gateway' ? 1 : 0.7}
          onMouseEnter={() => setHoveredFlow('cp-gateway')}
          onMouseLeave={() => setHoveredFlow(null)}
          className="pointer-events-auto cursor-pointer"
        />

        {/* Control Plane → MCP Monitor */}
        <path
          d="M 640 500 Q 560 500 380 520"
          stroke="#f59e0b"
          strokeWidth="2.5"
          fill="none"
          markerEnd="url(#arrowhead-amber)"
          opacity={hoveredFlow === 'cp-mcp' ? 1 : 0.7}
          onMouseEnter={() => setHoveredFlow('cp-mcp')}
          onMouseLeave={() => setHoveredFlow(null)}
          className="pointer-events-auto cursor-pointer"
        />

        {/* Control Plane → RAG / Resources */}
        <path
          d="M 640 370 Q 500 370 350 370"
          stroke="#f43f5e"
          strokeWidth="2.5"
          fill="none"
          markerEnd="url(#arrowhead-rose)"
          opacity={hoveredFlow === 'cp-rag' ? 1 : 0.7}
          onMouseEnter={() => setHoveredFlow('cp-rag')}
          onMouseLeave={() => setHoveredFlow(null)}
          className="pointer-events-auto cursor-pointer"
        />
      </svg>
    );
  };

  return (
    <div className="w-full bg-gradient-to-br from-slate-50 to-blue-50 p-12 rounded-lg">
      <div className="flex justify-between items-center mb-12">
        <div>
          <h2 className="text-3xl font-bold text-slate-900 mb-2">Omniguard Architecture Diagram</h2>
          <p className="text-slate-600 text-lg">
            AI Trust Platform architecture
          </p>
        </div>
        <button
          onClick={() => setShowDataFlows(!showDataFlows)}
          className={`px-6 py-3 rounded-lg font-semibold transition-all ${
            showDataFlows
              ? 'bg-blue-600 text-white hover:bg-blue-700'
              : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
          }`}
        >
          {showDataFlows ? 'Hide' : 'Display'} Data Flows
        </button>
      </div>

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

        <div className="bg-white rounded-2xl p-6 border-2 border-slate-300 shadow-lg flex-shrink-0" style={{ width: '500px', minHeight: '600px' }}>
          <h3 className="text-xl font-bold text-slate-900 mb-4 text-center">Customer environment</h3>
          
          <div className="flex flex-col gap-5">
            <div className="bg-white border-2 border-blue-500 rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-base">🤖</span>
                </div>
                <h3 className="text-base font-bold text-slate-900">Agentic App</h3>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                AI application that orchestrates interactions with external systems
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
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

              <div className="bg-cyan-50 border-2 border-cyan-500 rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 bg-cyan-100 rounded-lg flex items-center justify-center">
                    <span className="text-base">🛡️</span>
                  </div>
                  <h3 className="text-sm font-bold text-slate-900">LLM Gateway</h3>
                </div>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Monitors and routes all prompts
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white border-2 border-emerald-500 rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <span className="text-base">📚</span>
                  </div>
                  <h3 className="text-sm font-bold text-slate-900">RAG / Resources</h3>
                </div>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Knowledge base and retrieval system
                </p>
              </div>

              <div className="bg-white border-2 border-blue-400 rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-base">🧠</span>
                  </div>
                  <h3 className="text-sm font-bold text-slate-900">External LLMs</h3>
                </div>
                <p className="text-slate-600 text-xs leading-relaxed">
                  OpenAI, Anthropic, Google...
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-cyan-50 border-2 border-cyan-500 rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 bg-cyan-100 rounded-lg flex items-center justify-center">
                    <span className="text-base">🔍</span>
                  </div>
                  <h3 className="text-sm font-bold text-slate-900">MCP Monitor</h3>
                </div>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Observes and controls tool invocations
                </p>
              </div>

              <div className="bg-white border-2 border-purple-500 rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                    <span className="text-base">⚙️</span>
                  </div>
                  <h3 className="text-sm font-bold text-slate-900">MCP Tools</h3>
                </div>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Model Context Protocol tools
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-2xl p-6 border-2 border-cyan-500 shadow-xl" style={{ width: '700px', minHeight: '600px' }}>
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-slate-900 mb-1">Control Plane Platform</h3>
            <p className="text-slate-600 text-sm">Central orchestration & policy hub</p>
          </div>

          <div className="grid grid-cols-3 gap-4">
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

        <div className="absolute inset-0 pointer-events-none">
          {renderSVGConnections()}
        </div>
      </div>

      {showDataFlows && (
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
      )}
    </div>
  );
}
