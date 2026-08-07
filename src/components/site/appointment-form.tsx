import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "motion/react";
import { CalendarCheck, CheckCircle2, Loader2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { doctors, services } from "@/lib/site-data";

/** Validation: every field is length-capped and trimmed. */
const schema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(80, "Name is too long"),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter a valid phone number")
    .max(20, "Phone number is too long")
    .regex(/^[+\d\s()-]+$/, "Only digits, spaces and + ( ) - are allowed"),
  email: z.string().trim().email("Please enter a valid email address").max(160),
  treatment: z.string().min(1, "Select a treatment"),
  doctor: z.string().min(1, "Select a clinician"),
  date: z.string().min(1, "Choose a preferred date"),
  time: z.string().min(1, "Choose a preferred time"),
  message: z.string().trim().max(800, "Please keep this under 800 characters").optional(),
});

type FormValues = z.infer<typeof schema>;

const timeSlots = [
  "07:30 – 09:00",
  "09:00 – 11:00",
  "11:00 – 13:00",
  "13:00 – 15:00",
  "15:00 – 17:00",
  "17:00 – 19:00",
];

export function AppointmentForm() {
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      treatment: "",
      doctor: "",
      date: "",
      time: "",
      message: "",
    },
  });

  const onSubmit = async () => {
    // Simulated request — replace with a server function when a backend is connected.
    await new Promise((r) => setTimeout(r, 900));
    setSubmitted(true);
    form.reset();
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="rounded-4xl border border-accent/30 bg-card p-10 text-center shadow-[var(--shadow-luxe)]"
        role="status"
      >
        <motion.span
          initial={{ scale: 0, rotate: -30 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.15, type: "spring", stiffness: 180, damping: 12 }}
          className="mx-auto grid size-16 place-items-center rounded-full bg-gradient-teal text-accent-foreground"
        >
          <CheckCircle2 className="size-8" aria-hidden="true" />
        </motion.span>
        <h3 className="mt-6 text-2xl font-bold text-navy">Request received</h3>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
          A treatment coordinator will confirm your slot by phone within one working hour. If your
          situation is urgent, please call our emergency line and we will see you today.
        </p>
        <Button variant="outline" size="lg" className="mt-7" onClick={() => setSubmitted(false)}>
          Book another appointment
        </Button>
      </motion.div>
    );
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        noValidate
        className="rounded-4xl border border-border bg-card p-7 shadow-[var(--shadow-luxe)] sm:p-10"
      >
        <div className="grid gap-5 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full name</FormLabel>
                <FormControl>
                  <Input placeholder="Alex Moreno" autoComplete="name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone</FormLabel>
                <FormControl>
                  <Input placeholder="+1 415 555 0100" autoComplete="tel" inputMode="tel" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="sm:col-span-2">
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="you@email.com" autoComplete="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="treatment"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Treatment</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a treatment" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {services.map((s) => (
                      <SelectItem key={s.slug} value={s.title}>
                        {s.title}
                      </SelectItem>
                    ))}
                    <SelectItem value="General check-up & hygiene">
                      General check-up & hygiene
                    </SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="doctor"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Preferred clinician</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a clinician" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="No preference">No preference</SelectItem>
                    {doctors.map((d) => (
                      <SelectItem key={d.slug} value={d.name}>
                        {d.name} — {d.role}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Preferred date</FormLabel>
                <FormControl>
                  <Input type="date" min={new Date().toISOString().slice(0, 10)} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="time"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Preferred time</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a window" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {timeSlots.map((t) => (
                      <SelectItem key={t} value={t}>
                        {t}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className="sm:col-span-2">
                <FormLabel>Anything we should know?</FormLabel>
                <FormControl>
                  <Textarea
                    rows={4}
                    maxLength={800}
                    placeholder="Dental anxiety, previous treatment, insurance details…"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button
          type="submit"
          variant="hero"
          size="xl"
          className="mt-8 w-full shine"
          disabled={form.formState.isSubmitting}
        >
          {form.formState.isSubmitting ? (
            <>
              <Loader2 className="size-5 animate-spin" />
              Submitting request
            </>
          ) : (
            <>
              <CalendarCheck className="size-5" />
              Request my appointment
            </>
          )}
        </Button>

        <p className="mt-4 text-center text-xs text-muted-foreground">
          We reply within one working hour. Your details are never shared with third parties.
        </p>
      </form>
    </Form>
  );
}
