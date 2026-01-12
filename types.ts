import React from 'react';

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Module {
  title: string;
  description: string;
  features: string[];
}

export type ModalType = 'demo' | 'one-pager' | null;