import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const AdminProducts = () => {
  const [loading, setLoading] = useState(false);
  const [seeding, setSeeding] = useState(false);

  const handleSeed = async () => {
    setSeeding(true);
    const { error } = await supabase.from("products").insert([{
      name: "Nike Air Force 1 Kafe",
      brand: "Nike",
      category: "unisex",
      original_price: 69.99,
      current_price: 34.99,
      discount: Math.round(((69.99 - 34.99) / 69.99) * 100),
      sizes: "40, 41, 42, 43",
      image_url: "https://iiegqbznjtbgzzfmmjur.supabase.co/storage/v1/object/public/media//1.png",
      images: [],
      description: "Nike Air Force 1 në ngjyrë kafe premium me material tekstil dhe lidhëse me kapëse metalike. Stil unisex i përshtatshëm për çdo veshje.",
      stock: 50,
      is_new: false,
      is_sale: true,
    }]);
    if (error) toast.error("Error: " + error.message);
    else toast.success("Seeded!");
    setSeeding(false);
  };
  const [formData, setFormData] = useState({
    name: "",
    brand: "Unknown",
    category: "meshkuj",
    original_price: 0,
    current_price: 0,
    stock: 10,
    sizes: "38, 39, 40, 41, 42, 43, 44",
    image_url: "",
    images: "",
    description: "",
    is_new: false,
    is_sale: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const discount = formData.original_price > 0 
      ? Math.round((formData.original_price - formData.current_price) / formData.original_price * 100) 
      : 0;

    const { error } = await supabase.from("products").insert([{
      name: formData.name,
      brand: formData.brand,
      category: formData.category,
      original_price: formData.original_price,
      current_price: formData.current_price,
      discount,
      stock: formData.stock,
      sizes: formData.sizes,
      image_url: formData.image_url,
      images: formData.images ? formData.images.split(",").map(s => s.trim()) : [],
      description: formData.description || null,
      is_new: formData.is_new,
      is_sale: formData.is_sale,
    }]);

    if (error) {
      toast.error("Error: " + error.message);
    } else {
      toast.success("Product added!");
      setFormData({ name: "", brand: "Unknown", category: "meshkuj", original_price: 0, current_price: 0, stock: 10, sizes: "38, 39, 40, 41, 42, 43, 44", image_url: "", images: "", description: "", is_new: false, is_sale: false });
    }
    setLoading(false);
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Add Product</h1>
        <Button onClick={handleSeed} disabled={seeding} variant="outline">
          {seeding ? "Seeding..." : "Seed"}
        </Button>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label>Name *</Label>
          <Input value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} required />
        </div>
        <div>
          <Label>Brand</Label>
          <Input value={formData.brand} onChange={e => setFormData({...formData, brand: e.target.value})} />
        </div>
        <div>
          <Label>Category</Label>
          <Input value={formData.category} onChange={e => setFormData({...formData, category: e.target.value})} />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label>Original Price *</Label>
            <Input type="number" value={formData.original_price} onChange={e => setFormData({...formData, original_price: Number(e.target.value)})} required />
          </div>
          <div>
            <Label>Current Price *</Label>
            <Input type="number" value={formData.current_price} onChange={e => setFormData({...formData, current_price: Number(e.target.value)})} required />
          </div>
        </div>
        <div>
          <Label>Stock</Label>
          <Input type="number" value={formData.stock} onChange={e => setFormData({...formData, stock: Number(e.target.value)})} />
        </div>
        <div>
          <Label>Sizes (comma separated)</Label>
          <Input value={formData.sizes} onChange={e => setFormData({...formData, sizes: e.target.value})} />
        </div>
        <div>
          <Label>Image URL *</Label>
          <Input value={formData.image_url} onChange={e => setFormData({...formData, image_url: e.target.value})} required />
        </div>
        <div>
          <Label>Additional Images (comma separated URLs)</Label>
          <Input value={formData.images} onChange={e => setFormData({...formData, images: e.target.value})} />
        </div>
        <div>
          <Label>Description</Label>
          <Input value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} />
        </div>
        <div className="flex gap-4">
          <label className="flex items-center gap-2">
            <input type="checkbox" checked={formData.is_new} onChange={e => setFormData({...formData, is_new: e.target.checked})} />
            New
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" checked={formData.is_sale} onChange={e => setFormData({...formData, is_sale: e.target.checked})} />
            On Sale
          </label>
        </div>
        <Button type="submit" disabled={loading} className="w-full">
          {loading ? "Adding..." : "Add Product"}
        </Button>
      </form>
    </div>
  );
};

export default AdminProducts;
