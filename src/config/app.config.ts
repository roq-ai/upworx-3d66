interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Freelancer'],
  tenantRoles: ['Owner', 'Recruiter'],
  tenantName: 'Company',
  applicationName: 'Upworx',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Apply to job offers',
    'Update application status',
    'Manage personal user information',
    'View company information',
  ],
  ownerAbilities: ['Manage contracts', 'Manage applications', 'Manage job offers', 'Manage company information'],
  getQuoteUrl: 'https://app.roq.ai/proposal/b55e9e60-bca9-4591-909a-26a0469af391',
};
