import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, Loader2 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from 'sonner';

const formSchema = z.object({
  name: z.string().min(2, 'O nome deve ter pelo menos 2 caracteres'),
  email: z.string().email('E-mail inválido'),
  subject: z.string().min(2, 'O assunto é obrigatório'),
  message: z.string().min(10, 'A mensagem deve ter pelo menos 10 caracteres'),
});

type FormData = z.infer<typeof formSchema>;

export const ContactForm = () => {
  const { t } = useLanguage();
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      // Usando Web3Forms com a variável de ambiente do Vite
      const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
      
      if (!accessKey) {
        toast.error('Erro de configuração: Chave da API não encontrada.');
        return;
      }

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: accessKey,
          ...data,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setIsSuccess(true);
        toast.success('Mensagem enviada com sucesso! Entraremos em contato em breve.');
        reset();
        
        // Reset success animation after a few seconds
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        toast.error('Ocorreu um erro ao enviar a mensagem. Tente novamente.');
      }
    } catch (error) {
      toast.error('Falha na conexão. Por favor, cheque sua internet e tente novamente.');
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-foreground">
            {t.contact.form.name}
          </label>
          <Input
            id="name"
            {...register('name')}
            className={`bg-secondary/50 backdrop-blur-sm border-border/50 focus:border-accent focus:ring-accent transition-all duration-300 ${errors.name ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500' : ''}`}
            placeholder="João Silva"
          />
          {errors.name && <span className="text-red-400 text-xs">{errors.name.message}</span>}
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-foreground">
            {t.contact.form.email}
          </label>
          <Input
            id="email"
            type="email"
            {...register('email')}
            className={`bg-secondary/50 backdrop-blur-sm border-border/50 focus:border-accent focus:ring-accent transition-all duration-300 ${errors.email ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500' : ''}`}
            placeholder="joao@email.com"
          />
          {errors.email && <span className="text-red-400 text-xs">{errors.email.message}</span>}
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="subject" className="text-sm font-medium text-foreground">
          {t.contact.form.subject}
        </label>
        <Input
          id="subject"
          {...register('subject')}
          className={`bg-secondary/50 backdrop-blur-sm border-border/50 focus:border-accent focus:ring-accent transition-all duration-300 ${errors.subject ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500' : ''}`}
          placeholder={t.services.items.compliance.title}
        />
        {errors.subject && <span className="text-red-400 text-xs">{errors.subject.message}</span>}
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-foreground">
          {t.contact.form.message}
        </label>
        <Textarea
          id="message"
          {...register('message')}
          rows={5}
          className={`bg-secondary/50 backdrop-blur-sm border-border/50 focus:border-accent focus:ring-accent transition-all duration-300 resize-none ${errors.message ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500' : ''}`}
          placeholder="Descreva sua necessidade..."
        />
        {errors.message && <span className="text-red-400 text-xs">{errors.message.message}</span>}
      </div>

      <Button
        type="submit"
        size="lg"
        disabled={isSubmitting || isSuccess}
        className="w-full relative group overflow-hidden bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-xl py-6 tracking-wide shadow-[0_0_20px_-5px_rgba(var(--primary),0.4)] transition-all duration-500"
      >
        <span className="flex items-center justify-center relative z-10">
          {isSuccess ? (
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="flex items-center"
            >
              <CheckCircle className="mr-2 h-5 w-5 text-green-400" />
              {t.contact.form.success}
            </motion.div>
          ) : isSubmitting ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center"
            >
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Enviando...
            </motion.div>
          ) : (
            <div className="flex items-center">
              <Send className="mr-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              {t.contact.form.send}
            </div>
          )}
        </span>
      </Button>
    </motion.form>
  );
};
