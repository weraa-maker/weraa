"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import Image from "next/image";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { Textarea } from "@/components/ui/textarea";

// Define types for form data
type FormData = {
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  country: string;
  company_size: string;
  info: string;
};

export default function FirstSection() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();
  
  // Form state
  const [formData, setFormData] = useState<FormData>({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    country: "canada",
    company_size: "1-10",
    info: ""
  });

  // Handle form field changes
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle select changes
  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Form submission
  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    
    // Basic email validation
    if (!formData.email.includes('@')) {
      toast({
        title: "Error",
        description: 'Please enter a valid email address',
      });
      return;
    }
    
    try {
      setLoading(true);
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
  
      if (!res.ok) {
        throw new Error("Something went wrong");
      }
  
      setSubmitted(true);
    }
    catch (err) {
      console.error(err);
      toast({
        title: "Error",
        description: 'Something went wrong',
      });
    }
    finally {
      setLoading(false);
    }
  }

  return (
    <div className="items-center justify-center flex flex-col px-20 m:px-0 py-20 space-y-10 text-center">
      {!submitted ? (
        <div className="text-5xl">
          <div className="text-5xl">Talk with our sales team</div>
          <div className="text-xl">
            Fill out your information and a Bird sales representative will contact
            you shortly.
          </div>
        </div>
      ) : (
        <div className="text-3xl text-green-400">
          Thank you for contacting us. We will be in contact with you shortly.
        </div>
      )}

      {!submitted ? (
        <form
          onSubmit={handleSubmit}
          className="md:w-2/3 space-y-6 border p-8 rounded-xl"
        >
          <div className="flex items-center justify-center space-y-4 w-full">
            <label className="w-60 text-2xl pt-4">First Name</label>
            <Input 
              className="w-full" 
              name="first_name"
              value={formData.first_name}
              onChange={handleChange}
            />
          </div>
          
          <div className="flex items-center justify-center space-y-4 w-full">
            <label className="w-60 text-2xl pt-4">Last Name</label>
            <Input 
              className="" 
              name="last_name"
              value={formData.last_name}
              onChange={handleChange}
            />
          </div>

          <div className="flex items-center justify-center space-y-4">
            <label className="w-60 text-2xl pt-4">Email</label>
            <Input 
              className="" 
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          
          <div className="flex items-center justify-center space-y-4 w-full">
            <label className="w-60 text-2xl pt-4">Phone Number</label>
            <Input 
              className="" 
              name="phone_number"
              value={formData.phone_number}
              onChange={handleChange}
            />
          </div>

          <div className="flex items-center justify-center space-y-4 w-full">
            <label className="w-60 text-2xl pt-4">Country</label>
            <Select
              onValueChange={(value) => handleSelectChange("country", value)}
              defaultValue={formData.country}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select a country" />
              </SelectTrigger>
              <SelectContent>
                <div className="flex gap-4">
                  <SelectItem value="canada">Canada</SelectItem>
                </div>
                <SelectItem value="usa">
                  United States of America
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center justify-center space-y-4 w-full">
            <label className="w-60 text-2xl pt-4">Company Size</label>
            <Select
              onValueChange={(value) => handleSelectChange("company_size", value)}
              defaultValue={formData.company_size}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select company size" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1-10">1-10</SelectItem>
                <SelectItem value="11-50">11-50</SelectItem>
                <SelectItem value="51-200">51-200</SelectItem>
                <SelectItem value="201-500">201-500</SelectItem>
                <SelectItem value="501-1000">501-1000</SelectItem>
                <SelectItem value="1000+">1000+</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center justify-center space-y-4 w-full">
            <label className="w-60 text-2xl pt-4">Additional Information</label>
            <Textarea 
              className="" 
              name="info"
              value={formData.info}
              onChange={handleChange}
            />
          </div>

          <Button 
            type="submit" 
            disabled={loading}
            className="w-full"
          >
            {loading ? "Submitting..." : "Submit"}
          </Button>
        </form>
      ) : null}
    </div>
  );
}
