import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

export const ContactForm = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSuccess(true);
    toast({
      title: t.contact.form.success,
      description: formData.email,
    });

    // Reset after showing success
    setTimeout(() => {
      setIsSuccess(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-foreground">
            {t.contact.form.name}
          </label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="bg-background border-border focus:border-accent focus:ring-accent"
            placeholder="João Silva"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-foreground">
            {t.contact.form.email}
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="bg-background border-border focus:border-accent focus:ring-accent"
            placeholder="joao@email.com"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="subject" className="text-sm font-medium text-foreground">
          {t.contact.form.subject}
        </label>
        <Input
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="bg-background border-border focus:border-accent focus:ring-accent"
          placeholder={t.services.items.compliance.title}
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-foreground">
          {t.contact.form.message}
        </label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="bg-background border-border focus:border-accent focus:ring-accent resize-none"
          placeholder="Descreva sua necessidade..."
        />
      </div>

      <Button
        type="submit"
        size="lg"
        disabled={isSubmitting || isSuccess}
        className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-medium rounded-xl py-6"
      >
        {isSuccess ? (
          <>
            <CheckCircle className="mr-2 h-5 w-5" />
            {t.contact.form.success}
          </>
        ) : isSubmitting ? (
          <motion.div
            className="h-5 w-5 border-2 border-accent-foreground border-t-transparent rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          />
        ) : (
          <>
            <Send className="mr-2 h-5 w-5" />
            {t.contact.form.send}
          </>
        )}
      </Button>
    </motion.form>
  );
};
