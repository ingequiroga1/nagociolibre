import React from 'react';
import { Button } from './components/Button';
import { FeatureCard } from './components/FeatureCard';
import { TestimonialCard } from './components/TestimonialCard';
import { LeadForm } from './components/LeadForm';
import { 
  Download, 
  BarChart3, 
  TrendingUp, 
  Smartphone, 
  FileText,
  CheckCircle2,
  AlertCircle,
  XCircle,
  Users,
  Target,
  Briefcase,
  Award,
  Shield,
  Clock
} from 'lucide-react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';

export default function App() {
  const scrollToForm = () => {
    document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid lg:grid-cols-5 gap-8 items-center">
            <div className="lg:col-span-3">
              <h1 className="mb-6 text-white">
                Controla tu Negocio Desde Cualquier Lugar
              </h1>
              <p className="mb-8 text-xl text-blue-100">
                La guía completa para empresarios que quieren supervisar ventas, inventario y operaciones sin estar físicamente presentes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="large" variant="secondary" onClick={scrollToForm}>
                  <Download className="w-5 h-5" />
                  Descargar Guía Gratis
                </Button>
              </div>
              <div className="mt-8 flex items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-300" />
                  <span>100% Gratis</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-300" />
                  <span>PDF Descargable</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-300" />
                  <span>Acceso Inmediato</span>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-2 flex justify-center">
              <div className="relative max-w-xs w-full">
                <div className="relative z-10 transform hover:scale-105 transition-transform duration-300">
                  <div className="bg-white rounded-lg shadow-2xl p-3">
                    <ImageWithFallback
                      src="/assets/guianegocio.png"
                      alt="Guía: Controla tu Negocio Desde Cualquier Lugar"
                      className="w-full h-auto rounded shadow-lg"
                    />
                  </div>
                </div>
                <div className="absolute -bottom-3 -right-3 w-24 h-24 bg-yellow-400 rounded-full opacity-20 blur-2xl"></div>
                <div className="absolute -top-3 -left-3 w-24 h-24 bg-blue-300 rounded-full opacity-20 blur-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-gray-900">
              ¿Te Sientes Atrapado en tu Propio Negocio?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Estos son los problemas más comunes que enfrentan los dueños de pequeñas y medianas empresas:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl border-l-4 border-red-500 shadow-sm">
              <XCircle className="w-10 h-10 mb-3 text-red-500" />
              <h3 className="mb-2 text-gray-900">Falta de Control</h3>
              <p className="text-gray-600">
                No sabes qué está pasando en tu negocio cuando no estás presente.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border-l-4 border-red-500 shadow-sm">
              <AlertCircle className="w-10 h-10 mb-3 text-red-500" />
              <h3 className="mb-2 text-gray-900">Dependencia Total</h3>
              <p className="text-gray-600">
                Tu negocio no funciona sin ti. No puedes tomar vacaciones o enfermarte.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border-l-4 border-red-500 shadow-sm">
              <TrendingUp className="w-10 h-10 mb-3 text-red-500" />
              <h3 className="mb-2 text-gray-900">Pérdidas Invisibles</h3>
              <p className="text-gray-600">
                Inventario que se pierde, ventas que no se registran, fugas de efectivo.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border-l-4 border-red-500 shadow-sm">
              <FileText className="w-10 h-10 mb-3 text-red-500" />
              <h3 className="mb-2 text-gray-900">Sin Procesos</h3>
              <p className="text-gray-600">
                Todo depende de tu presencia física. No hay sistemas ni reportes claros.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1589114207353-1fc98a11070b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMGNvbnN1bHRhbnR8ZW58MXx8fHwxNzY1ODQ5NDUyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Solución para tu negocio"
                className="w-full h-auto rounded-xl shadow-xl"
              />
            </div>

            <div>
              <h2 className="mb-6 text-gray-900">
                La Solución: Sistemas y Procesos que Trabajan para Ti
              </h2>
              <p className="mb-6 text-lg text-gray-700">
                Esta guía te enseñará cómo implementar sistemas, procesos y herramientas de automatización que te permitirán controlar tu negocio desde cualquier lugar.
              </p>
              
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full">
                      <CheckCircle2 className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-1 text-gray-900">Sistemas Automatizados</h3>
                    <p className="text-gray-600">
                      Implementa procesos que funcionan sin tu presencia física.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full">
                      <CheckCircle2 className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-1 text-gray-900">Control Remoto</h3>
                    <p className="text-gray-600">
                      Supervisa ventas, inventario y operaciones desde tu celular.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full">
                      <CheckCircle2 className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-1 text-gray-900">Reportes en Tiempo Real</h3>
                    <p className="text-gray-600">
                      Toma decisiones basadas en datos actualizados al instante.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Button size="large" onClick={scrollToForm}>
                  <Download className="w-5 h-5" />
                  Obtener la Guía Ahora
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Learn Section */}
      <section className="py-16 lg:py-24 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-gray-900">
              ¿Qué Aprenderás en Esta Guía?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Descubre las estrategias probadas que usan los empresarios exitosos para controlar sus negocios remotamente.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard
              icon={<BarChart3 className="w-6 h-6" />}
              title="Control de Ventas Remoto"
              description="Monitorea todas tus ventas en tiempo real desde cualquier dispositivo."
            />
            
            <FeatureCard
              icon={<Shield className="w-6 h-6" />}
              title="Prevención de Pérdidas"
              description="Identifica y elimina fugas de inventario y efectivo automáticamente."
            />
            
            <FeatureCard
              icon={<FileText className="w-6 h-6" />}
              title="Procesos y Reportes"
              description="Crea sistemas de trabajo y reportes que funcionan solos."
            />
            
            <FeatureCard
              icon={<Smartphone className="w-6 h-6" />}
              title="Automatización de Operaciones"
              description="Implementa herramientas que automatizan tareas repetitivas."
            />
          </div>

          <div className="mt-12 bg-white rounded-xl p-8 shadow-lg">
            <h3 className="mb-6 text-center text-gray-900">
              Contenido de la Guía
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                'Cómo seleccionar las herramientas adecuadas para tu negocio',
                'Estrategias para delegar sin perder el control',
                'Sistemas de inventario que previenen pérdidas',
                'Cómo crear reportes automáticos diarios',
                'Implementación de puntos de venta modernos',
                'Control de caja y flujo de efectivo remoto',
                'Indicadores clave (KPIs) que debes monitorear',
                'Casos de éxito de empresarios reales'
              ].map((item, index) => (
                <div key={index} className="flex gap-3 items-start">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who Is This For Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-gray-900">
              ¿Para Quién Es Esta Guía?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Esta guía es perfecta para ti si:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-blue-100 rounded-full">
                <Briefcase className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="mb-2 text-gray-900">Dueños de PYMES</h3>
              <p className="text-gray-600">
                Tienes una pequeña o mediana empresa y quieres escalar sin estar atrapado en el día a día.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-blue-100 rounded-full">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="mb-2 text-gray-900">Emprendedores</h3>
              <p className="text-gray-600">
                Estás iniciando tu negocio y quieres implementar sistemas desde el principio.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-blue-100 rounded-full">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="mb-2 text-gray-900">Negocios en Crecimiento</h3>
              <p className="text-gray-600">
                Tu negocio está creciendo y necesitas delegar sin perder el control.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Author/Brand Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-3 gap-8 p-8">
              <div className="md:col-span-1">
                <ImageWithFallback
                  src="/assets/equipo.png"
                  alt="Experto en negocios"
                  className="w-full h-auto rounded-lg"
                />
              </div>
              
              <div className="md:col-span-2">
                <div className="flex items-center gap-2 mb-4">
                  <Award className="w-6 h-6 text-blue-600" />
                  <span className="text-sm text-blue-600">Expertos en Gestión Empresarial</span>
                </div>
                <h3 className="mb-4 text-gray-900">
                  Desarrollado por Consultores con Experiencia Real
                </h3>
                <p className="mb-4 text-gray-700">
                  Esta guía ha sido creada por consultores empresariales con más de 15 años de experiencia ayudando a pequeñas y medianas empresas a implementar sistemas de control y automatización.
                </p>
                <p className="mb-6 text-gray-700">
                  Hemos ayudado a más de 500 empresarios a liberarse de las operaciones diarias mientras mantienen el control total de sus negocios.
                </p>
                
                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200">
                  <div className="text-center">
                    <p className="mb-1 text-gray-900">100+</p>
                    <p className="text-sm text-gray-600">Negocios Asesorados</p>
                  </div>
                  <div className="text-center">
                    <p className="mb-1 text-gray-900">10+</p>
                    <p className="text-sm text-gray-600">Años de Experiencia</p>
                  </div>
                  <div className="text-center">
                    <p className="mb-1 text-gray-900">98%</p>
                    <p className="text-sm text-gray-600">Satisfacción</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-gray-900">
              Lo Que Dicen Nuestros Lectores
            </h2>
            <p className="text-xl text-gray-600">
              Miles de empresarios ya han transformado sus negocios
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <TestimonialCard
              name="Carlos Mendoza"
              role="Dueño de Restaurante"
              content="Gracias a esta guía, ahora puedo supervisar mi restaurante desde casa. Las ventas aumentaron 30% porque implementé los sistemas que recomiendan."
              image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
            />
            
            <TestimonialCard
              name="María González"
              role="Tienda de Ropa"
              content="Por fin pude tomar vacaciones sin preocuparme. El inventario se controla solo y recibo reportes diarios en mi celular."
              image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
            />
            
            <TestimonialCard
              name="Roberto Silva"
              role="Ferretería"
              content="La mejor inversión de tiempo que he hecho. Implementé todo en 2 semanas y ahora tengo control total sin estar presente."
              image="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop"
            />
          </div>
        </div>
      </section>

      {/* Lead Form Section */}
      <section id="lead-form" className="py-16 lg:py-24 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-white">
              Descarga Tu Guía Gratuita Ahora
            </h2>
            <p className="text-xl text-blue-100">
              Recibe acceso inmediato al PDF completo. Sin costo, sin tarjeta de crédito.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-2xl">
            <LeadForm />
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-8 text-sm">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5" />
              <span>100% Seguro</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5" />
              <span>Sin Spam</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>Entrega Instantánea</span>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-4 text-gray-900">
            No Dejes que tu Negocio te Controle a Ti
          </h2>
          <p className="mb-8 text-xl text-gray-600">
            Miles de empresarios ya están controlando sus negocios remotamente. Es tu turno.
          </p>
          <div className="inline-block bg-yellow-50 border-2 border-yellow-400 rounded-xl p-6">
            <p className="mb-4 text-gray-900">
              ⚡ <strong>Oferta por Tiempo Limitado:</strong> Descarga gratis + Bonus exclusivo de plantillas de reportes
            </p>
            <Button size="large" onClick={scrollToForm}>
              <Download className="w-5 h-5" />
              Descargar Guía Gratis Ahora
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2025 Control Empresarial. Todos los derechos reservados.
          </p>
          <p className="mt-2 text-sm text-gray-500">
            Esta guía es solo para fines educativos y no constituye asesoría legal o financiera.
          </p>
        </div>
      </footer>
    </div>
  );
}