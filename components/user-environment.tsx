'use client';

import React, { useState } from 'react';

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
        className="absolute inset-0 w-full h-full"
        style={{ zIndex: 20, pointerEvents: 'auto' }}
        viewBox="0 0 1000 900"
        preserveAspectRatio="none"
      >
        <defs>
          <marker id="arrowhead-llm-to-gw" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
            <polygon points="0 0, 10 3, 0 6" fill="#3b82f6" />
          </marker>
          <marker id="arrowhead-gw-to-llm" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
            <polygon points="0 0, 10 3, 0 6" fill="#3b82f6" />
          </marker>
          <marker id="arrowhead-app-to-monitor" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
            <polygon points="0 0, 10 3, 0 6" fill="#a855f7" />
          </marker>
          <marker id="arrowhead-monitor-to-mcp" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
            <polygon points="0 0, 10 3, 0 6" fill="#a855f7" />
          </marker>
          <marker id="arrowhead-rag" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
            <polygon points="0 0, 10 3, 0 6" fill="#10b981" />
          </marker>
          <marker id="arrowhead-cp-to-gw" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
            <polygon points="0 0, 10 3, 0 6" fill="#f97316" />
          </marker>
          <marker id="arrowhead-cp-to-monitor" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
            <polygon points="0 0, 10 3, 0 6" fill="#f59e0b" />
          </marker>
          <marker id="arrowhead-cp-to-rag" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
            <polygon points="0 0, 10 3, 0 6" fill="#f43f5e" />
          </marker>
        </defs>

        {/* LLM Flow - Agentic App to Gateway */}
        <g style={{ pointerEvents: 'auto' }}>
          <path
            d="M 150 120 L 310 120"
            stroke="transparent"
            strokeWidth="25"
            fill="none"
            style={{ pointerEvents: 'stroke', cursor: 'pointer' }}
            onMouseEnter={() => setHoveredFlow('llm-flow')}
            onMouseLeave={() => setHoveredFlow(null)}
          />
          <path
            d="M 150 120 L 310 120"
            stroke="#3b82f6"
            strokeWidth="3"
            fill="none"
            opacity={hoveredFlow === null || hoveredFlow === 'llm-flow' ? 0.6 : 0.15}
            markerEnd="url(#arrowhead-llm-to-gw)"
            style={{ transition: 'opacity 0.3s', pointerEvents: 'none' }}
          />
        </g>

        {/* LLM Flow - Gateway to External LLM */}
        <g style={{ pointerEvents: 'auto' }}>
          <path
            d="M 450 120 L 830 120"
            stroke="transparent"
            strokeWidth="25"
            fill="none"
            style={{ pointerEvents: 'stroke', cursor: 'pointer' }}
            onMouseEnter={() => setHoveredFlow('llm-flow')}
            onMouseLeave={() => setHoveredFlow(null)}
          />
          <path
            d="M 450 120 L 830 120"
            stroke="#3b82f6"
            strokeWidth="3"
            fill="none"
            opacity={hoveredFlow === null || hoveredFlow === 'llm-flow' ? 0.6 : 0.15}
            markerEnd="url(#arrowhead-gw-to-llm)"
            style={{ transition: 'opacity 0.3s', pointerEvents: 'none' }}
          />
        </g>

        {/* MCP Flow - Agentic App to Monitor */}
        <g style={{ pointerEvents: 'auto' }}>
          <path
            d="M 150 120 Q 100 180 70 205"
            stroke="transparent"
            strokeWidth="25"
            fill="none"
            style={{ pointerEvents: 'stroke', cursor: 'pointer' }}
            onMouseEnter={() => setHoveredFlow('mcp-flow')}
            onMouseLeave={() => setHoveredFlow(null)}
          />
          <path
            d="M 150 120 Q 100 180 70 205"
            stroke="#a855f7"
            strokeWidth="3"
            fill="none"
            opacity={hoveredFlow === null || hoveredFlow === 'mcp-flow' ? 0.6 : 0.15}
            markerEnd="url(#arrowhead-app-to-monitor)"
            style={{ transition: 'opacity 0.3s', pointerEvents: 'none' }}
          />
        </g>

        {/* MCP Flow - Monitor to MCP Tools */}
        <g style={{ pointerEvents: 'auto' }}>
          <path
            d="M 230 260 Q 310 260 370 260"
            stroke="transparent"
            strokeWidth="25"
            fill="none"
            style={{ pointerEvents: 'stroke', cursor: 'pointer' }}
            onMouseEnter={() => setHoveredFlow('mcp-flow')}
            onMouseLeave={() => setHoveredFlow(null)}
          />
          <path
            d="M 230 260 Q 310 260 370 260"
            stroke="#a855f7"
            strokeWidth="3"
            fill="none"
            opacity={hoveredFlow === null || hoveredFlow === 'mcp-flow' ? 0.6 : 0.15}
            markerEnd="url(#arrowhead-monitor-to-mcp)"
            style={{ transition: 'opacity 0.3s', pointerEvents: 'none' }}
          />
        </g>

        {/* Direct RAG Flow - Agentic App to RAG Resources */}
        <g style={{ pointerEvents: 'auto' }}>
          <path
            d="M 150 120 Q 600 180 870 240"
            stroke="transparent"
            strokeWidth="25"
            fill="none"
            style={{ pointerEvents: 'stroke', cursor: 'pointer' }}
            onMouseEnter={() => setHoveredFlow('rag-flow')}
            onMouseLeave={() => setHoveredFlow(null)}
          />
          <path
            d="M 150 120 Q 600 180 870 240"
            stroke="#10b981"
            strokeWidth="3"
            fill="none"
            opacity={hoveredFlow === null || hoveredFlow === 'rag-flow' ? 0.6 : 0.15}
            markerEnd="url(#arrowhead-rag)"
            style={{ transition: 'opacity 0.3s', pointerEvents: 'none' }}
          />
        </g>

        {/* Control Plane to LLM Gateway */}
        <g style={{ pointerEvents: 'auto' }}>
          <path
            d="M 380 500 Q 380 350 380 160"
            stroke="transparent"
            strokeWidth="25"
            fill="none"
            style={{ pointerEvents: 'stroke', cursor: 'pointer' }}
            onMouseEnter={() => setHoveredFlow('cp-to-gw')}
            onMouseLeave={() => setHoveredFlow(null)}
          />
          <path
            d="M 380 500 Q 380 350 380 160"
            stroke="#f97316"
            strokeWidth="3"
            fill="none"
            opacity={hoveredFlow === null || hoveredFlow === 'cp-to-gw' ? 0.6 : 0.15}
            markerEnd="url(#arrowhead-cp-to-gw)"
            style={{ transition: 'opacity 0.3s', pointerEvents: 'none' }}
          />
        </g>

        {/* Control Plane to MCP Monitor */}
        <g style={{ pointerEvents: 'auto' }}>
          <path
            d="M 150 500 Q 150 400 150 300"
            stroke="transparent"
            strokeWidth="25"
            fill="none"
            style={{ pointerEvents: 'stroke', cursor: 'pointer' }}
            onMouseEnter={() => setHoveredFlow('cp-to-monitor')}
            onMouseLeave={() => setHoveredFlow(null)}
          />
          <path
            d="M 150 500 Q 150 400 150 300"
            stroke="#f59e0b"
            strokeWidth="3"
            fill="none"
            opacity={hoveredFlow === null || hoveredFlow === 'cp-to-monitor' ? 0.6 : 0.15}
            markerEnd="url(#arrowhead-cp-to-monitor)"
            style={{ transition: 'opacity 0.3s', pointerEvents: 'none' }}
          />
        </g>

        {/* Control Plane to RAG Resources for validation */}
        <g style={{ pointerEvents: 'auto' }}>
          <path
            d="M 850 500 Q 900 400 920 300"
            stroke="transparent"
            strokeWidth="25"
            fill="none"
            style={{ pointerEvents: 'stroke', cursor: 'pointer' }}
            onMouseEnter={() => setHoveredFlow('cp-to-rag')}
            onMouseLeave={() => setHoveredFlow(null)}
          />
          <path
            d="M 850 500 Q 900 400 920 300"
            stroke="#f43f5e"
            strokeWidth="3"
            fill="none"
            opacity={hoveredFlow === null || hoveredFlow === 'cp-to-rag' ? 0.6 : 0.15}
            markerEnd="url(#arrowhead-cp-to-rag)"
            style={{ transition: 'opacity 0.3s', pointerEvents: 'none' }}
          />
        </g>
      </svg>
    );
  };

  return (
    <div className="w-full bg-gradient-to-br from-slate-50 to-blue-50 p-12 rounded-lg">
      <h2 className="text-3xl font-bold text-slate-900 mb-2">AITruism Architecture</h2>
      <p className="text-slate-600 mb-12 text-lg">
        Comprehensive AI Trust, Risk & Security Management Platform
      </p>

      <div className="relative w-full flex flex-col gap-12">
        <div className="relative" style={{ minHeight: '900px' }}>
          {renderSVGConnections()}

          {/* First Row - User Environment */}
          <div className="flex gap-12 justify-between items-start relative z-0 px-4">
            <div className="flex-1">
              <div className="bg-white border-2 border-blue-500 rounded-xl p-5 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-blue-600 font-bold text-lg">🤖</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">Agentic App</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  AI application that orchestrates interactions with external systems
                </p>
              </div>
            </div>

            <div className="flex-1">
              <div className="bg-slate-100 border-2 border-slate-400 rounded-xl p-5 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-slate-200 rounded-lg flex items-center justify-center">
                    <span className="text-xl">🛡️</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">LLM Gateway</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Monitors and routes all prompts between Agentic App and external LLMs
                </p>
              </div>
            </div>

            <div className="flex-1">
              <div className="bg-white border-2 border-blue-400 rounded-xl p-5 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-xl">🧠</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">External LLMs</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-2">
                  Third-party language models providing AI reasoning
                </p>
                <div className="text-xs text-slate-500">
                  <span className="font-semibold">Providers:</span> OpenAI, Anthropic, Google...
                </div>
              </div>
            </div>
          </div>

          {/* Second Row - Tools, Resources, and Monitoring */}
          <div className="flex gap-12 justify-between items-start mt-12 relative z-0 px-4">
            <div className="flex-1">
              <div className="bg-slate-100 border-2 border-slate-400 rounded-xl p-5 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-slate-200 rounded-lg flex items-center justify-center">
                    <span className="text-xl">🔍</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">MCP Monitor</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Observes and controls all tool invocations via MCP
                </p>
              </div>
            </div>

            <div className="flex-1">
              <div className="bg-white border-2 border-purple-500 rounded-xl p-5 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <span className="text-xl">⚙️</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">MCP Tools</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Model Context Protocol tools for external actions
                </p>
              </div>
            </div>

            <div className="flex-1">
              <div className="bg-white border-2 border-emerald-500 rounded-xl p-5 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <span className="text-xl">📚</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">RAG / Resources</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Knowledge base and retrieval-augmented generation system
                </p>
              </div>
            </div>
          </div>

          {/* Tooltips */}
          {hoveredFlow === 'llm-flow' && (
            <div className="absolute top-20 left-1/2 transform -translate-x-1/2 z-20 bg-white rounded-lg p-4 shadow-lg border border-blue-200 w-56">
              <div className="text-sm font-bold text-blue-600 mb-1">Prompts & Responses</div>
              <p className="text-xs text-slate-600">Agentic App → LLM Gateway → External LLMs</p>
            </div>
          )}
          {hoveredFlow === 'mcp-flow' && (
            <div className="absolute bottom-24 left-8 z-20 bg-white rounded-lg p-4 shadow-lg border border-purple-200 w-56">
              <div className="text-sm font-bold text-purple-600 mb-1">Tool Calls & Execution</div>
              <p className="text-xs text-slate-600">Agentic App → MCP Monitor → MCP Tools</p>
            </div>
          )}
          {hoveredFlow === 'rag-flow' && (
            <div className="absolute bottom-24 right-8 z-20 bg-white rounded-lg p-4 shadow-lg border border-emerald-200 w-56">
              <div className="text-sm font-bold text-emerald-600 mb-1">Knowledge Queries</div>
              <p className="text-xs text-slate-600">Agentic App queries RAG/Resources for knowledge retrieval</p>
            </div>
          )}
          {hoveredFlow === 'cp-to-gw' && (
            <div className="absolute top-64 left-96 z-20 bg-white rounded-lg p-4 shadow-lg border border-orange-200 w-56">
              <div className="text-sm font-bold text-orange-600 mb-1">Policy Control</div>
              <p className="text-xs text-slate-600">Control Plane Platform monitors and controls LLM Gateway via policies</p>
            </div>
          )}
          {hoveredFlow === 'cp-to-monitor' && (
            <div className="absolute top-64 left-8 z-20 bg-white rounded-lg p-4 shadow-lg border border-amber-200 w-56">
              <div className="text-sm font-bold text-amber-600 mb-1">Policy Control</div>
              <p className="text-xs text-slate-600">Control Plane Platform controls MCP Monitor via policies</p>
            </div>
          )}
          {hoveredFlow === 'cp-to-rag' && (
            <div className="absolute top-64 right-8 z-20 bg-white rounded-lg p-4 shadow-lg border border-rose-200 w-56">
              <div className="text-sm font-bold text-rose-600 mb-1">Validation Queries</div>
              <p className="text-xs text-slate-600">Control Plane Platform queries RAG for validation of Agentic app behavior</p>
            </div>
          )}
        </div>

        {/* Control Plane Platform */}
        <div className="w-full bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl p-8 border-2 border-slate-400 shadow-xl -mt-[472px]">
          <div className="flex items-center justify-center gap-6 mb-4">
            <div className="px-4 py-2 bg-teal-100 border border-teal-400 rounded-lg text-teal-700 text-sm font-semibold">
              Rules
            </div>
            <div className="w-14 h-14 bg-slate-300 rounded-full flex items-center justify-center">
              <span className="text-3xl">⚙️</span>
            </div>
            <div className="px-4 py-2 bg-blue-100 border border-blue-400 rounded-lg text-blue-700 text-sm font-semibold">
              Audit logs
            </div>
          </div>

          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-slate-900 mb-2">Control Plane Platform</h3>
            <p className="text-slate-600 text-base">Central orchestration & policy hub</p>
          </div>

          <div className="grid grid-cols-4 gap-4">
            <div className="bg-white rounded-lg p-4 border border-slate-300 hover:shadow-md transition-shadow">
              <div className="flex flex-col items-center text-center">
                <span className="text-4xl mb-2">⚖️</span>
                <h4 className="text-base font-bold text-slate-900 mb-1">OPA/Cedar</h4>
                <p className="text-sm text-slate-600">Policy</p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 border border-slate-300 hover:shadow-md transition-shadow">
              <div className="flex flex-col items-center text-center">
                <span className="text-4xl mb-2">📊</span>
                <h4 className="text-base font-bold text-slate-900 mb-1">Dashboard</h4>
                <p className="text-sm text-slate-600">Observability</p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 border border-slate-300 hover:shadow-md transition-shadow">
              <div className="flex flex-col items-center text-center">
                <span className="text-4xl mb-2">🚨</span>
                <h4 className="text-base font-bold text-slate-900 mb-1">SIEM Bus</h4>
                <p className="text-sm text-slate-600">Security</p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 border border-slate-300 hover:shadow-md transition-shadow">
              <div className="flex flex-col items-center text-center">
                <span className="text-4xl mb-2">🏛️</span>
                <h4 className="text-base font-bold text-slate-900 mb-1">Vault</h4>
                <p className="text-sm text-slate-600">PII Store</p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 border border-slate-300 hover:shadow-md transition-shadow">
              <div className="flex flex-col items-center text-center">
                <span className="text-4xl mb-2">🔍</span>
                <h4 className="text-base font-bold text-slate-900 mb-1">Discovery</h4>
                <p className="text-sm text-slate-600">Registry</p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 border border-slate-300 hover:shadow-md transition-shadow">
              <div className="flex flex-col items-center text-center">
                <span className="text-4xl mb-2">📝</span>
                <h4 className="text-base font-bold text-slate-900 mb-1">Reports</h4>
                <p className="text-sm text-slate-600">Analytics</p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 border border-slate-300 hover:shadow-md transition-shadow">
              <div className="flex flex-col items-center text-center">
                <span className="text-4xl mb-2">✓</span>
                <h4 className="text-base font-bold text-slate-900 mb-1">RAG Client</h4>
                <p className="text-sm text-slate-600">Validation</p>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-slate-200 p-8">
              <div className="flex flex-col items-center text-center">
                <span className="text-4xl mb-2">🧠</span>
                <h4 className="text-base font-bold text-slate-900 mb-1">JudgeLLMs</h4>
                <p className="text-sm text-slate-600 leading-tight">
                  Llama Firewall, NVidia Nemo, Microsoft Presidio...
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Data Flows */}
        <div className="bg-white rounded-lg border border-slate-200 p-8">
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
    </div>
  );
}
