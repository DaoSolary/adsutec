import { useState } from 'react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TrendingUp, Users, Code, Clock, CheckCircle, AlertCircle } from 'lucide-react';

const projectData = [
  { name: 'Jan', projetos: 4, concluidos: 3 },
  { name: 'Fev', projetos: 6, concluidos: 5 },
  { name: 'Mar', projetos: 5, concluidos: 5 },
  { name: 'Abr', projetos: 7, concluidos: 6 },
  { name: 'Mai', projetos: 8, concluidos: 7 },
  { name: 'Jun', projetos: 6, concluidos: 6 },
];

const performanceData = [
  { name: 'Jan', performance: 85 },
  { name: 'Fev', performance: 92 },
  { name: 'Mar', performance: 88 },
  { name: 'Abr', performance: 95 },
  { name: 'Mai', performance: 90 },
  { name: 'Jun', performance: 94 },
];

export function ClientDashboard() {
  const [activeTab, setActiveTab] = useState<'overview' | 'projects' | 'metrics'>('overview');

  const stats = [
    { icon: Code, label: 'Projetos Ativos', value: '12', change: '+2 este mês' },
    { icon: CheckCircle, label: 'Projetos Concluídos', value: '32', change: '+5 este mês' },
    { icon: Clock, label: 'Tempo Médio', value: '45 dias', change: '-5 dias' },
    { icon: TrendingUp, label: 'Satisfação', value: '98%', change: '+2%' },
  ];

  const recentProjects = [
    { name: 'Sistema de Gestão', status: 'Em Desenvolvimento', progress: 75 },
    { name: 'App Mobile', status: 'Em Testes', progress: 90 },
    { name: 'Site Institucional', status: 'Concluído', progress: 100 },
    { name: 'E-commerce', status: 'Em Planejamento', progress: 20 },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-slate-900">Dashboard do Cliente</h1>
        <p className="mt-2 text-slate-600">Acompanhe seus projetos e métricas em tempo real</p>
      </div>

      {/* Tabs */}
      <div className="mb-8 border-b border-slate-200">
        <nav className="-mb-px flex space-x-8">
          {[
            { id: 'overview', label: 'Visão Geral' },
            { id: 'projects', label: 'Projetos' },
            { id: 'metrics', label: 'Métricas' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`whitespace-nowrap border-b-2 px-1 py-4 text-sm font-medium ${
                activeTab === tab.id
                  ? 'border-primary text-primary'
                  : 'border-transparent text-slate-500 hover:border-slate-300 hover:text-slate-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Overview Tab */}
      {activeTab === 'overview' && (
        <div className="space-y-8">
          {/* Stats */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-600">{stat.label}</p>
                    <p className="mt-2 text-3xl font-bold text-slate-900">{stat.value}</p>
                    <p className="mt-1 text-xs text-green-600">{stat.change}</p>
                  </div>
                  <stat.icon className="h-12 w-12 text-primary opacity-50" />
                </div>
              </div>
            ))}
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Projetos por Mês</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={projectData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="projetos" fill="#2563eb" name="Projetos" />
                  <Bar dataKey="concluidos" fill="#10b981" name="Concluídos" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Performance</h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="performance" stroke="#2563eb" name="Performance %" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Recent Projects */}
          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Projetos Recentes</h3>
            <div className="space-y-4">
              {recentProjects.map((project, index) => (
                <div key={index} className="border-b border-slate-200 pb-4 last:border-0 last:pb-0">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-slate-900">{project.name}</h4>
                    <span className="text-sm text-slate-600">{project.status}</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div
                      className="bg-primary h-2 rounded-full transition-all"
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>
                  <p className="mt-1 text-xs text-slate-500">{project.progress}% concluído</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Projects Tab */}
      {activeTab === 'projects' && (
        <div className="space-y-6">
          {recentProjects.map((project, index) => (
            <div key={index} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-slate-900">{project.name}</h3>
                <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                  {project.status}
                </span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-2 mb-2">
                <div
                  className="bg-primary h-2 rounded-full transition-all"
                  style={{ width: `${project.progress}%` }}
                />
              </div>
              <p className="text-sm text-slate-600">{project.progress}% concluído</p>
            </div>
          ))}
        </div>
      )}

      {/* Metrics Tab */}
      {activeTab === 'metrics' && (
        <div className="space-y-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Taxa de Conclusão</h3>
              <div className="text-4xl font-bold text-primary">94%</div>
              <p className="mt-2 text-sm text-slate-600">Últimos 6 meses</p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Tempo Médio</h3>
              <div className="text-4xl font-bold text-primary">45 dias</div>
              <p className="mt-2 text-sm text-slate-600">Por projeto</p>
            </div>
          </div>

          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Evolução de Performance</h3>
            <ResponsiveContainer width="100%" height={400}>
              <LineChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="performance" stroke="#2563eb" name="Performance %" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}
    </div>
  );
}







