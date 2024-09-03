'use client';

import { Check } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

type PlanName = 'Talent Only' | 'Talent & Primary Support' | 'Talent & Full Support';

const PricingSection = () => {
  const [selectedPlan, setSelectedPlan] = useState<PlanName>('Talent Only');

  const handlePlanChange = (plan: PlanName) => {
    setSelectedPlan(plan);
  };

  const plans: Record<PlanName, {
    description: string;
    features: Record<string, string>;
  }> = {
    'Talent Only': {
      description: 'Agents to help you grow from here to where you want to go next',
      features: {
        'Team Size': '2+',
        'Agents': 'dedicated',
        'Team Leader': 'shared',
        'Operations Manager': 'shared',
        'Onboarding Manager': 'shared',
        'CSM': 'shared',
        'HR People Partner': 'shared',
        'Continuous Improvement': 'add-on',
        'Quality Assurance': 'add-on',
        'Buffer': 'add-on',
      }
    },
    'Talent & Primary Support': {
      description: 'A team of agents with the primary support team included to be self-supported, lightening your load',
      features: {
        'Team Size': '5+',
        'Agents': 'dedicated',
        'Team Leader': 'shared / dedicated, option to buy-up',
        'Operations Manager': 'shared',
        'Onboarding Manager': 'shared',
        'CSM': 'shared',
        'HR People Partner': 'shared',
        'Continuous Improvement': 'add-on',
        'Quality Assurance': 'shared / dedicated, option to buy-up',
        'Buffer': 'add-on',
      }
    },
    'Talent & Full Support': {
      description: 'Turn-key projects where we execute your vision and partner to accelerate your dreams',
      features: {
        'Team Size': '25+',
        'Agents': 'dedicated',
        'Team Leader': 'dedicated',
        'Operations Manager': 'shared / dedicated',
        'Onboarding Manager': 'shared',
        'CSM': 'shared / dedicated',
        'HR People Partner': 'shared / dedicated',
        'Continuous Improvement': 'shared / dedicated',
        'Quality Assurance': 'shared / dedicated',
        'Buffer': 'dedicated',
      }
    }
  };

  return (
    <div className="flex flex-col items-center py-20 bg-gray-50">
      <div className="text-center px-6 md:px-12 mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Choose Your Perfect Pricing Plan</h1>
        <p className="text-xl text-gray-600">We provide end-to-end customer support solutions and dedicated agents to businesses of any size at competitive prices.</p>
      </div>

      <div className="flex flex-col md:flex-row px-6 md:px-12 space-y-6 md:space-y-0 md:space-x-6">
        {Object.keys(plans).map((plan) => (
          <div
            key={plan}
            className={`flex-1 p-6 rounded-lg shadow-lg border-2 ${
              selectedPlan === plan
                ? 'border-blue-500 bg-blue-50 text-blue-800'
                : 'border-gray-300 bg-white text-gray-600'
            } transition-transform transform hover:scale-105 cursor-pointer`}
            onClick={() => handlePlanChange(plan as PlanName)}
          >
            <h2 className="text-2xl font-semibold mb-2">{plan}</h2>
            <p className="text-lg mb-4">{plans[plan as PlanName].description}</p>
            <Link href="/contact" className="block bg-blue-500 text-white px-4 py-2 rounded-lg text-lg text-center hover:bg-blue-600 transition-colors duration-300">
              Contact Sales
            </Link>
          </div>
        ))}
      </div>

      <div className="w-full px-6 md:px-12 mt-12">
        <div className="bg-white rounded-lg shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 border-t border-gray-200">
            {Object.keys(plans).map((plan) => (
              <div key={plan} className="p-6 border-b md:border-b-0 md:border-r last:border-r-0">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">{plan}</h2>
                <p className="text-lg mb-6">{plans[plan as PlanName].description}</p>
                <ul className="space-y-4">
                  {Object.entries(plans[plan as PlanName].features).map(([feature, detail]) => (
                    <li key={feature} className="flex items-center space-x-2">
                      <Check size={20} className={`text-gray-500 ${detail.includes('included') ? 'text-green-500' : ''}`} />
                      <span className={`text-gray-600 ${detail.includes('add-on') ? 'italic' : ''}`}>
                        {feature}: {detail}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
