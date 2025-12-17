import React, { useState } from 'react';
import { Button } from './Button';
import { Input } from './Input';
import { Download, CheckCircle2 } from 'lucide-react';

export function LeadForm() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({ name: '', email: '', phone: '' });
  const [success, setSuccess] = useState(false);


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    const newErrors = { name: '', email: '', phone: '' };
    
    if (!formData.name.trim()) {
      newErrors.name = 'Por favor ingresa tu nombre';
    }
    
    // if (!formData.email.trim()) {
    //   newErrors.email = 'Por favor ingresa tu email';
    // } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    //   newErrors.email = 'Por favor ingresa un email válido';
    // }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Por favor ingresa tu teléfono';
    } else if (!/^[0-9\s\-\+\(\)]{8,}$/.test(formData.phone)) {
      newErrors.phone = 'Por favor ingresa un teléfono válido';
    }
    
    if (newErrors.name || newErrors.email || newErrors.phone) {
      setErrors(newErrors);
      return;
    }
    
    // Simulate form submission
    console.log('Form submitted:', formData);
        try {
      // Enviar a Google Sheets
      await fetch("https://script.google.com/macros/s/AKfycbynS5JB-s5SWTldFzM2L3j4MWfQ9JzQNyyEEKwsSm9EBn6QWUlhOVYI_3H3kqHqwJ9dgQ/exec", {
        method: "POST",
        mode: "cors",
        headers: { "Content-Type": "application/x-www-form-urlencoded", },
        body: new URLSearchParams({
          fullName: formData.name,
          email: formData.email,
          phone: formData.phone,
        }),
      });

      // Descarga del PDF
      // const link = document.createElement("a");
      // link.href = "/guia-remates.pdf";
      // link.download = "guia-remates.pdf";
      // link.click();

      // Redirigir a la página de gracias
      //navigate("/gracias");

      setSuccess(true);
    } catch (error) {
      console.error("Error al enviar datos:", error);
      alert("Error al enviar tus datos. Intenta de nuevo.");
    }
    setSubmitted(true);
    
    // Reset after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '' });
    }, 10000);
  };

  if (submitted) {
    return (
      <div className="max-w-md mx-auto p-8 bg-green-50 border-2 border-green-500 rounded-xl text-center">
        <CheckCircle2 className="w-16 h-16 mx-auto mb-4 text-green-600" />
        <h3 className="mb-2 text-green-900">¡Gracias por tu interés!</h3>
        <p className="text-green-700">Revisa tu email para descargar la guía gratuita.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className="space-y-4">
        <Input
          label="Nombre completo"
          type="text"
          placeholder="Tu nombre"
          value={formData.name}
          onChange={(e) => {
            setFormData({ ...formData, name: e.target.value });
            setErrors({ ...errors, name: '' });
          }}
          error={errors.name}
        />
        <Input
          label="Email"
          type="email"
          placeholder="tu@email.com"
          value={formData.email}
          onChange={(e) => {
            setFormData({ ...formData, email: e.target.value });
            setErrors({ ...errors, email: '' });
          }}
          error={errors.email}
        />
        <Input
          label="Teléfono"
          type="tel"
          placeholder="Tu teléfono"
          value={formData.phone}
          onChange={(e) => {
            setFormData({ ...formData, phone: e.target.value });
            setErrors({ ...errors, phone: '' });
          }}
          error={errors.phone}
        />
        <Button type="submit" size="large" className="w-full">
          <Download className="w-5 h-5" />
          Descargar Guía Gratis
        </Button>
      </div>
      <p className="mt-4 text-sm text-center text-gray-500">
        100% gratis. Sin tarjeta de crédito requerida.
      </p>
    </form>
  );
}