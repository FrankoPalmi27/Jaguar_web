
import React from 'react';
import { 
  BarChart3, 
  ClipboardCheck, 
  ShieldAlert, 
  Truck, 
  DollarSign,
  Layers,
  Search,
  Users,
  Database,
  Lock
} from 'lucide-react';

export const MODULES = [
  {
    id: 'op',
    title: 'Gestión Operativa',
    description: 'Control integral de la flota y monitoreo de eventos críticos en tiempo real.',
    features: ['Trazabilidad 1:1 por viaje', 'Asignación algorítmica de unidades', 'Control de estados operativos', 'Gestión de incidencias en ruta'],
    icon: <Truck className="w-6 h-6" />
  },
  {
    id: 'fin',
    title: 'Auditoría Financiera',
    description: 'Visibilidad de costos operativos y conciliación de márgenes netos.',
    features: ['Análisis de costos reales vs. estimados', 'Auditoría de gastos extraordinarios', 'Conciliación automatizada', 'Control de margen neto por unidad'],
    icon: <DollarSign className="w-6 h-6" />
  },
  {
    id: 'doc',
    title: 'Cumplimiento POD',
    description: 'Digitalización e integridad documental por cada operación realizada.',
    features: ['Captura de evidencias digitales', 'Validación inmutable de archivos', 'Repositorio centralizado', 'Alertas de documentación pendiente'],
    icon: <ClipboardCheck className="w-6 h-6" />
  },
  {
    id: 'an',
    title: 'Analytics Engine',
    description: 'Business Intelligence nativo para la toma de decisiones tácticas.',
    features: ['KPIs de rendimiento por cliente', 'Dashboard de rentabilidad histórica', 'Reportes de auditoría técnica', 'Proyecciones de flujo operativo'],
    icon: <BarChart3 className="w-6 h-6" />
  }
];
