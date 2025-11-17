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
    return (
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 25 }}
        viewBox="0 0 1100 450"
        preserveAspectRatio="none"
      >
        <defs>
          <marker id="arrowhead-blue" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
            <polygon points="0 0, 10 3, 0 6" fill="#3b82f6" />
          </marker>
          <marker id="arrowhead-purple" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
            <polygon points="0 0, 10 3, 0 6" fill="#a855f7" />
          </marker>
          <marker id="arrowhead-green" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
            <polygon points="0 0, 10 3, 0 6" fill="#10b981" />
          </marker>
          <marker id="arrowhead-orange" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
            <polygon points="0 0, 10 3, 0 6" fill="#f97316" />
          </marker>
          <marker id="arrowhead-amber" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
            <polygon points="0 0, 10 3, 0 6" fill="#f59e0b" />
          </marker>
          <marker id="arrowhead-rose" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
            <polygon points="0 0, 10 3, 0 6" fill="#f43f5e" />
          </marker>
        </defs>

        {/* Blue Flow - Agentic App to LLM Gateway */}
        <g className="pointer-events-auto">
          <path
            d="M 220 60 L 320 60"
            stroke="transparent"
            strokeWidth="20"
            fill="none"
            className="pointer-events-stroke cursor-pointer"
            onMouseEnter={() => setHoveredFlow('llm-flow')}
            onMouseLeave={() => setHoveredFlow(null)}
          />
          <path
            d="M 220 60 L 320 60"
            stroke="#3b82f6"
            strokeWidth="2"
            fill="none"
            opacity={hoveredFlow === null || hoveredFlow === 'llm-flow' ? 0.6 : 0.15}
            markerEnd="url(#arrowhead-blue)"
            className="transition-opacity duration-300 pointer-events-none"
          />
        </g>

        {/* Blue Flow - LLM Gateway to External LLM */}
        <g className="pointer-events-auto">
          <path
            d="M 320 60 L 220 140"
            stroke="transparent"
            strokeWidth="20"
            fill="none"
            className="pointer-events-stroke cursor-pointer"
            onMouseEnter={() => setHoveredFlow('llm-flow')}
            onMouseLeave={() => setHoveredFlow(null)}
          />
          <path
            d="M 320 60 L 220 140"
            stroke="#3b82f6"
            strokeWidth="2"
            fill="none"
            opacity={hoveredFlow === null || hoveredFlow === 'llm-flow' ? 0.6 : 0.15}
            markerEnd="url(#arrowhead-blue)"
            className="transition-opacity duration-300 pointer-events-none"
          />
        </g>

        {/* Purple Flow - Agentic App to MCP Monitor */}
        <g className="pointer-events-auto">
          <path
            d="M 140 100 L 140 200"
            stroke="transparent"
            strokeWidth="20"
            fill="none"
            className="pointer-events-stroke cursor-pointer"
            onMouseEnter={() => setHoveredFlow('mcp-flow')}
            onMouseLeave={() => setHoveredFlow(null)}
          />
          <path
            d="M 140 100 L 140 200"
            stroke="#a855f7"
            strokeWidth="2"
            fill="none"
            opacity={hoveredFlow === null || hoveredFlow === 'mcp-flow' ? 0.6 : 0.15}
            markerEnd="url(#arrowhead-purple)"
            className="transition-opacity duration-300 pointer-events-none"
          />
        </g>

        {/* Purple Flow - MCP Monitor to MCP Tools */}
        <g className="pointer-events-auto">
          <path
            d="M 140 240 L 140 300"
            stroke="transparent"
            strokeWidth="20"
            fill="none"
            className="pointer-events-stroke cursor-pointer"
            onMouseEnter={() => setHoveredFlow('mcp-flow')}
            onMouseLeave={() => setHoveredFlow(null)}
          />
          <path
            d="M 140 240 L 140 300"
            stroke="#a855f7"
            strokeWidth="2"
            fill="none"
            opacity={hoveredFlow === null || hoveredFlow === 'mcp-flow' ? 0.6 : 0.15}
            markerEnd="url(#arrowhead-purple)"
            className="transition-opacity duration-300 pointer-events-none"
          />
        </g>

        {/* Green Flow - Agentic App to RAG Resources */}
        <g className="pointer-events-auto">
          <path
            d="M 220 100 Q 250 250 320 350"
            stroke="transparent"
            strokeWidth="20"
            fill="none"
            className="pointer-events-stroke cursor-pointer"
            onMouseEnter={() => setHoveredFlow('rag-flow')}
            onMouseLeave={() => setHoveredFlow(null)}
          />
          <path
            d="M 220 100 Q 250 250 320 350"
            stroke="#10b981"
            strokeWidth="2"
            fill="none"
            opacity={hoveredFlow === null || hoveredFlow === 'rag-flow' ? 0.6 : 0.15}
            markerEnd="url(#arrowhead-green)"
            className="transition-opacity duration-300 pointer-events-none"
          />
        </g>

        {/* Orange Flow - Control Plane to LLM Gateway */}
        <g className="pointer-events-auto">
          <path
            d="M 550 200 Q 450 130 360 60"
            stroke="transparent"
            strokeWidth="20"
            fill="none"
            className="pointer-events-stroke cursor-pointer"
            onMouseEnter={() => setHoveredFlow('cp-to-gw')}
            onMouseLeave={() => setHoveredFlow(null)}
          />
          <path
            d="M 550 200 Q 450 130 360 60"
            stroke="#f97316"
            strokeWidth="2"
            fill="none"
            opacity={hoveredFlow === null || hoveredFlow === 'cp-to-gw' ? 0.6 : 0.15}
            markerEnd="url(#arrowhead-orange)"
            className="transition-opacity duration-300 pointer-events-none"
          />
        </g>

        {/* Amber Flow - Control Plane to MCP Monitor */}
        <g className="pointer-events-auto">
          <path
            d="M 550 220 Q 350 220 180 220"
            stroke="transparent"
            strokeWidth="20"
            fill="none"
            className="pointer-events-stroke cursor-pointer"
            onMouseEnter={() => setHoveredFlow('cp-to-monitor')}
            onMouseLeave={() => setHoveredFlow(null)}
          />
          <path
            d="M 550 220 Q 350 220 180 220"
            stroke="#f59e0b"
            strokeWidth="2"
            fill="none"
            opacity={hoveredFlow === null || hoveredFlow === 'cp-to-monitor' ? 0.6 : 0.15}
            markerEnd="url(#arrowhead-amber)"
            className="transition-opacity duration-300 pointer-events-none"
          />
        </g>

        {/* Rose Flow - Control Plane to RAG Resources */}
        <g className="pointer-events-auto">
          <path
            d="M 550 300 Q 450 330 360 350"
            stroke="transparent"
            strokeWidth="20"
            fill="none"
            className="pointer-events-stroke cursor-pointer"
            onMouseEnter={() => setHoveredFlow('cp-to-rag')}
            onMouseLeave={() => setHoveredFlow(null)}
          />
          <path
            d="M 550 300 Q 450 330 360 350"
            stroke="#f43f5e"
            strokeWidth="2"
            fill="none"
            opacity={hoveredFlow === null || hoveredFlow === 'cp-to-rag' ? 0.6 : 0.15}
            markerEnd="url(#arrowhead-rose)"
            className="transition-opacity duration-300 pointer-events-none"
          />
        </g>
      </svg>
    );
  };

  return (
    <div className="w-full bg-gradient-to-br from-slate-50 to-blue-50 p-12 rounded-lg">
      <h2 className="text-3xl font-bold text-slate-900 mb-2">Architecture Diagram</h2>
      <p className="text-slate-600 mb-12 text-lg">
        AI Trust Platform architecture
      </p>

      <div className="relative w-full flex gap-8 items-center">
        {/* Agentic App User - Left Side */}
        <div className="flex flex-col items-center gap-3">
          <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
            <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="text-center">
            <h4 className="text-sm font-bold text-slate-900">Agentic App User</h4>
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

            {/* LLM Gateway */}
            <div className="bg-slate-100 border-2 border-slate-400 rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-slate-200 rounded-lg flex items-center justify-center">
                  <span className="text-base">🛡️</span>
                </div>
                <h3 className="text-sm font-bold text-slate-900">LLM Gateway</h3>
              </div>
              <p className="text-slate-600 text-xs leading-relaxed">
                Monitors and routes all prompts between Agentic App and external LLMs
              </p>
            </div>

            {/* MCP Monitor */}
            <div className="bg-slate-100 border-2 border-slate-400 rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-slate-200 rounded-lg flex items-center justify-center">
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

        {/* Right Side - Control Plane Platform */}
        <div className="flex-1 bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl p-6 border-2 border-slate-400 shadow-xl">
          <div className="flex items-center justify-center gap-4 mb-3">
            <div className="px-3 py-1 bg-teal-100 border border-teal-400 rounded-lg text-teal-700 text-xs font-semibold">
              Rules
            </div>
            <div className="w-10 h-10 bg-slate-300 rounded-full flex items-center justify-center">
              <span className="text-2xl">⚙️</span>
            </div>
            <div className="px-3 py-1 bg-blue-100 border border-blue-400 rounded-lg text-blue-700 text-xs font-semibold">
              Audit logs
            </div>
          </div>

          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-slate-900 mb-1">Control Plane Platform</h3>
            <p className="text-slate-600 text-sm">Central orchestration & policy hub</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-4 border border-slate-300 hover:shadow-md transition-shadow">
              <div className="flex flex-col items-center text-center">
                <span className="text-3xl mb-2">⚖️</span>
                <h4 className="text-sm font-bold text-slate-900 mb-1">OPA/Cedar</h4>
                <p className="text-xs text-slate-600">Policy</p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 border border-slate-300 hover:shadow-md transition-shadow">
              <div className="flex flex-col items-center text-center">
                <span className="text-3xl mb-2">📊</span>
                <h4 className="text-sm font-bold text-slate-900 mb-1">Dashboard</h4>
                <p className="text-xs text-slate-600">Observability</p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 border border-slate-300 hover:shadow-md transition-shadow">
              <div className="flex flex-col items-center text-center">
                <span className="text-3xl mb-2">🚨</span>
                <h4 className="text-sm font-bold text-slate-900 mb-1">SIEM Bus</h4>
                <p className="text-xs text-slate-600">Security</p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 border border-slate-300 hover:shadow-md transition-shadow">
              <div className="flex flex-col items-center text-center">
                <span className="text-3xl mb-2">🏛️</span>
                <h4 className="text-sm font-bold text-slate-900 mb-1">Vault</h4>
                <p className="text-xs text-slate-600">PII Store</p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 border border-slate-300 hover:shadow-md transition-shadow">
              <div className="flex flex-col items-center text-center">
                <span className="text-3xl mb-2">🔍</span>
                <h4 className="text-sm font-bold text-slate-900 mb-1">Discovery</h4>
                <p className="text-xs text-slate-600">Registry</p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 border border-slate-300 hover:shadow-md transition-shadow">
              <div className="flex flex-col items-center text-center">
                <span className="text-3xl mb-2">📝</span>
                <h4 className="text-sm font-bold text-slate-900 mb-1">Reports</h4>
                <p className="text-xs text-slate-600">Analytics</p>
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
                <span className="text-3xl mb-2">🧠</span>
                <h4 className="text-sm font-bold text-slate-900 mb-1">JudgeLLMs</h4>
                <p className="text-xs text-slate-600 leading-tight">
                  Llama Firewall, NVidia Nemo...
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Omniguard User - Right Side */}
        <div className="flex flex-col items-center gap-3">
          <div className="w-24 h-24 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center shadow-lg">
            <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="text-center">
            <h4 className="text-sm font-bold text-slate-900">Omniguard User</h4>
          </div>
        </div>

        {/* SVG Connections Overlay */}
        <div className="absolute inset-0 pointer-events-none">
          {renderSVGConnections()}
        </div>

        {/* Tooltips */}
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
