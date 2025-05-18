import React from 'react';
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import H4 from "../Typography/H4";
import { useNavigate } from 'react-router';

const schema = z.object({
  name: z.string().min(2, "Имя обязательно").max(50, "Максимум 50 символов"),
  description: z.string().min(10, "Описание обязательно"),
  image: z.string().url("Невалидный URL картинки"),
  price: z.coerce.number().min(1, "Цена обязательна"),
  discount: z.coerce.number().optional(),
  category: z.enum(["vegetables", "fruits", "meat", "dairy"], {
    required_error: "Категория обязательна"
  })
});

function FormPost() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm({
    resolver: zodResolver(schema)
  });

  async function onSubmit(data) {
    try {
      const response = await axios.post('http://localhost:8000/api', data);
      console.log("Созай:", response.data );
      reset(); 
      navigate("/")
    } catch (error) {
      console.error("Хато:", error);
    }
  }

  return (
    <div className="w-[600px] mx-auto mt-40">
      <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-5">
          <span className="mx-auto font-medium text-2xl">Please complete the form.</span>

          <label className="relative">
            <input
              {...register("name")}
              type="text"
              className="border w-full border-blue-500 rounded-md p-3 h-10"
              placeholder="Name"
            />
            {errors.name && <p className="text-red-500">{errors.name.message}</p>}
          </label>

          <label className="relative">
            <input
              {...register("description")}
              type="text"
              className="border w-full border-blue-500 rounded-md p-3 h-10"
              placeholder="Description"
            />
            {errors.description && <p className="text-red-500">{errors.description.message}</p>}
          </label>

          <label className="relative">
            <input
              {...register("image")}
              type="text"
              className="border w-full border-blue-500 rounded-md p-3 h-10"
              placeholder="Image URL"
            />
            {errors.image && <p className="text-red-500">{errors.image.message}</p>}
          </label>

          <label className="relative">
            <input
              {...register("price")}
              type="number"
              className="border w-full border-blue-500 rounded-md p-3 h-10"
              placeholder="Price"
            />
            {errors.price && <p className="text-red-500">{errors.price.message}</p>}
          </label>

          <label className="relative">
            <input
              {...register("discount")}
              type="number"
              className="border w-full border-blue-500 rounded-md p-3 h-10"
              placeholder="Discount (optional)"
            />
            {errors.discount && <p className="text-red-500">{errors.discount.message}</p>}
          </label>

          <label>
            <H4>Category</H4>
            <select
              name="category"
              className="p-3 rounded-xl border border-gray-300 text-gray-700 bg-white w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              {...register("category")}
            >
              <option value="">-- Выберите категорию --</option>
              <option value="vegetables">Овощи</option>
              <option value="fruits">Фрукты</option>
              <option value="meat">Мясные</option>
              <option value="dairy">Молочные</option>
            </select>
            {errors.category && <p className="text-red-600">{errors.category.message}</p>}
          </label>

          <div className="flex justify-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 disabled:opacity-50"
            >
              {isSubmitting ? "Loading..." : "Submit"}
            </button>
          </div>

          {errors.root && <p className="text-red-500">{errors.root.message}</p>}
        </div>
      </form>
    </div>
  );
}

export default FormPost;
