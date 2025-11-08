
'use client';

import { useState } from 'react';
import Button from '@/components/Button';

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('overview');

  const metrics = [
    { label: 'Revenue (30d)', value: '$12,450', change: '+23%' },
    { label: 'Visitors', value: '8,234', change: '+12%' },
    { label: 'Conversion Rate', value: '3.2%', change: '+0.8%' },
    { label: 'AOV', value: '$67', change: '+5%' }
  ];

  return (
    <div className="min-h-screen bg-bg-page py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Dashboard
          </h1>
          <p className="text-gray-600">
            Mock interactive dashboard - Demo mode
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {metrics.map((metric, index) => (
            <div key={index} className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="text-sm text-gray-600 mb-2">{metric.label}</div>
              <div className="text-3xl font-bold text-gray-900 mb-1">{metric.value}</div>
              <div className="text-sm text-green-600">{metric.change}</div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden mb-8">
          <div className="border-b border-gray-200">
            <div className="flex">
              {['overview', 'experiments', 'campaigns', 'tasks'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-4 font-medium capitalize ${
                    activeTab === tab
                      ? 'text-primary border-b-2 border-primary'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="p-8">
            {activeTab === 'overview' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <p className="text-gray-700">
                      📊 This is a mock dashboard. In production, you'd see real-time data, live experiments, and actionable insights.
                    </p>
                  </div>
                  <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                    <span className="text-gray-400">Revenue Chart</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'experiments' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Active Experiments</h2>
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="p-4 border border-gray-200 rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold">Experiment {i}</h3>
                        <span className="text-sm text-green-600 bg-green-50 px-2 py-1 rounded">Running</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">Testing variation in checkout flow</p>
                      <div className="flex gap-4 text-sm">
                        <span>Control: 2.1%</span>
                        <span className="text-green-600">Variant: 2.8% (+33%)</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'campaigns' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Ad Campaigns</h2>
                <div className="space-y-4">
                  {['Meta Ads', 'Google Ads'].map((platform) => (
                    <div key={platform} className="p-4 border border-gray-200 rounded-lg">
                      <h3 className="font-semibold mb-2">{platform}</h3>
                      <div className="grid grid-cols-3 gap-4 text-sm">
                        <div>
                          <div className="text-gray-600">Spend</div>
                          <div className="font-semibold">$1,234</div>
                        </div>
                        <div>
                          <div className="text-gray-600">ROAS</div>
                          <div className="font-semibold">3.2×</div>
                        </div>
                        <div>
                          <div className="text-gray-600">Status</div>
                          <div className="text-green-600">Active</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'tasks' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Pending Tasks</h2>
                <div className="space-y-4">
                  {[
                    'Review and approve new ad creative',
                    'Approve 15% discount experiment rollout',
                    'Review customer feedback summary'
                  ].map((task, i) => (
                    <div key={i} className="p-4 border border-gray-200 rounded-lg flex justify-between items-center">
                      <span>{task}</span>
                      <Button size="sm">Review</Button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
