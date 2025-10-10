import React, { useState } from "react";
import { Mail, Send, Globe, Coffee } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { useLanguage } from "../contexts/language-context";
import emailjs from "@emailjs/browser";

export function Contact() {
  const { t } = useLanguage();

  type Form = { name: string; email: string; message: string };
  const [formData, setFormData] = useState<Form>({
    name: "",
    email: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);
  type AlertState = {
    isOpen: boolean;
    type: "success" | "error";
    message: string;
  };

  const [alertState, setAlertState] = useState<AlertState>({
    isOpen: false,
    type: "success",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev: Form) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    // Read config from Vite env. If you deploy, set these env vars.
    const serviceId = (import.meta as any).env?.VITE_EMAILJS_SERVICE_ID as
      | string
      | undefined;
    const templateId = (import.meta as any).env?.VITE_EMAILJS_TEMPLATE_ID as
      | string
      | undefined;
    const publicKey = (import.meta as any).env?.VITE_EMAILJS_PUBLIC_KEY as
      | string
      | undefined;

    if (!serviceId || !templateId || !publicKey) {
      alert(
        "Email service is not configured. Please set up EmailJS configuration."
      );
      setIsSending(false);
      return;
    }

    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    try {
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (err: any) {
      const msg =
        (err && (err.text || err.message)) || String(err || "Unknown error");
      alert(`Failed to send message: ${msg}`);
    } finally {
      setIsSending(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: t("contact.email"),
      value: "joji.the.jungle@gmail.com",
      href: "mailto:joji.the.jungle@gmail.com",
    },
    {
      icon: Globe,
      title: t("contact.remote"),
      value: t("contact.remoteDesc"),
      href: null,
    },
    {
      icon: Coffee,
      title: t("contact.coffee"),
      value: t("contact.coffeeDesc"),
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-medium mb-6">
            {t("contact.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t("contact.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-medium mb-6">{t("contact.connect")}</h3>
            <p className="text-muted-foreground mb-8">
              {t("contact.connectDesc")}
            </p>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <info.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">{info.title}</h4>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <span className="text-muted-foreground">
                        {info.value}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>{t("contact.sendMessage")}</CardTitle>
            </CardHeader>
            <CardContent>
              {" "}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">{t("contact.name")}</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="email">{t("contact.email")}</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="message">{t("contact.message")}</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="mt-1"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full"
                  disabled={isSending}
                  aria-busy={isSending}
                >
                  <Send className="w-4 h-4 mr-2" />
                  {isSending
                    ? t("contact.sending") ?? "Sending..."
                    : t("contact.send")}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
