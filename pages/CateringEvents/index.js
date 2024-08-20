import NavBar from "@/components/navbar";
import Image from "next/image";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

export default function CateringEvents() {
  const [captchaValue, setCaptchaValue] = useState();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    eventDate: "",
    eventTime: "",
    eventLocation: "",
    guestNumber: "",
    budget: "",
    selectedItems: [],
  });

  const foodItems = [
    { id: 1, name: "Brisket", type: "meat" },
    { id: 2, name: "Sausage", type: "meat" },
    { id: 3, name: "Chicken leg quarters", type: "meat" },
    { id: 4, name: "Ribs", type: "meat" },
    { id: 5, name: "Ham", type: "meat" },
    { id: 6, name: "Mild BBQ sauce", type: "meat" },
    { id: 7, name: "Spicy BBQ sauce", type: "meat" },
    { id: 8, name: "Potato salad", type: "side" },
    { id: 9, name: "BBQ beans", type: "side" },
    { id: 10, name: "Green salad", type: "side" },
    { id: 11, name: "Green beans", type: "side" },
    { id: 12, name: "Mac n' Cheese", type: "side" },
    { id: 13, name: "Dinner rolls", type: "bread" },
    { id: 14, name: "Sliced bread", type: "bread" },
    { id: 15, name: "Sweet Tea", type: "drink" },
    { id: 16, name: "Unsweet Tea", type: "drink" },
    { id: 17, name: "Strawberry Lemonade", type: "drink" },
    { id: 18, name: "Sweet potato pie", type: "dessert" },
    { id: 19, name: "7UP cake", type: "dessert" },
    { id: 20, name: "Sock-It-To-Me cake", type: "dessert" },
    { id: 21, name: "Banana pudding", type: "dessert" },
    { id: 22, name: "Plates", type: "extra" },
    { id: 23, name: "Napkins/Flatware", type: "extra" },
    { id: 24, name: "Cups", type: "extra" },
    {
      id: 25,
      name: "Service (2 hr min., +$85/hr Mon-Sat, +$130/hr Sun)",
      type: "extra",
    },
  ];

  const handleCaptchaChange = (value) => {
    console.log("reCaptcha Val", value);
    setCaptchaValue(value);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (itemId) => {
    const sidesIds = foodItems.slice(7, 12).map((item) => item.id);

  // Count how many "Sides" items are currently selected
  const selectedSidesCount = formData.selectedItems.filter((id) =>
    sidesIds.includes(id)
  ).length;

  // Check if the item being clicked is part of the "Sides" section
  if (sidesIds.includes(itemId)) {
    // If 2 "Sides" items are already selected and the user is trying to select another, prevent it
    if (selectedSidesCount >= 2 && !formData.selectedItems.includes(itemId)) {
      alert("You can only select up to 2 sides.");
      return;
    }}

    const drinkIds = foodItems.slice(14, 17).map((item) => item.id)
    const selectedDrinkCount = formData.selectedItems.filter((id) => drinkIds.includes(id)).length;
    if (drinkIds.includes(itemId)) {
        if (selectedDrinkCount >= 2 && !formData.selectedItems.includes(itemId)) {
            alert("You can only select up to 2 drinks")
            return
        }
    }

    const dessertIds = foodItems.slice(17, 21).map((item) => item.id)
    const selectedDessertCount = formData.selectedItems.filter((id) => dessertIds.includes(id)).length
    if (dessertIds.includes(itemId)) {
        if (selectedDessertCount >= 2 && !formData.selectedItems.includes(itemId)) {
            alert("You can only select up to 2 desserts")
            return
        }
    }
  
    setFormData((prevData) => {
      const selectedItems = prevData.selectedItems.includes(itemId)
        ? prevData.selectedItems.filter((id) => id !== itemId)
        : [...prevData.selectedItems, itemId];

      return { ...prevData, selectedItems };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!captchaValue) {
      alert("Please complete the reCAPTCHA.");
      return;
    }

    const selectedItemsNames = formData.selectedItems.map((itemId) => {
        const item = foodItems.find((foodItem) => foodItem.id === itemId)
        return item ? item.name : null
    })

    const formDataToSend = {
      // Add your form data here
      name: formData.name,
      email: formData.email,
      phoneNumber: formData.phoneNumber,
      eventDate: formData.eventDate,
      eventTime: formData.eventTime,
      eventLocation: formData.eventLocation,
      guestNumber: formData.guestNumber,
      budget: formData.budget,
      selectedItems: selectedItemsNames,
      captcha: captchaValue,
    };

    const response = await fetch("/api/submit-form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formDataToSend),
    });
    console.log(formDataToSend)
    const result = await response.json();
    console.log(result);
  };

  return (
    <>
      <div className="row">
        <NavBar />
        <div className="relative w-full h-[50vh] overflow-hidden">
          <Image
            src="/catering.webp"
            className="absolute inset-0 w-full h-full object-cover"
            layout="fill"
            alt="Catering"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
            <h1 className="text-4xl font-bold">
              LET US CATER AND SERVE YOU AND YOUR GUESTS AT YOUR NEXT EVENT!
            </h1>
          </div>
        </div>
        <h1 className="flex justify-center text-[22px] mt-8 mb-8 max-w-[500px] text-center m-auto">
          Please provide the following information and we will get back to you
          within 48 hours
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <div>
            <label htmlFor="name" className="sr-only"></label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name *"
              required
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          <div>
            <label htmlFor="email" className="sr-only">
              Email:
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email *"
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div>
            <label htmlFor="phoneNumber" className="sr-only">
              Phone Number:
            </label>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Phone Number *"
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div>
            <label htmlFor="eventDate" className="sr-only">
              Event Date:
            </label>
            <input
              type="date"
              name="eventDate"
              value={formData.eventDate}
              onChange={handleChange}
              placeholder="Event Date *"
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div>
            <label htmlFor="eventTime" className="sr-only">
              Event Time:
            </label>
            <input
              type="time"
              name="eventTime"
              value={formData.eventTime}
              onChange={handleChange}
              placeholder="Event Time *"
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div>
            <label htmlFor="eventLocation" className="sr-only">
              Event Location:
            </label>
            <input
              type="text"
              name="eventLocation"
              value={formData.eventLocation}
              onChange={handleChange}
              placeholder="Event Location *"
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div>
            <label htmlFor="guestNumber" className="sr-only">
              Number of Guests:
            </label>
            <input
              type="number"
              name="guestNumber"
              value={formData.guestNumber}
              onChange={handleChange}
              placeholder="Number of Guests *"
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div>
            <label htmlFor="budget" className="sr-only">
              Budget:
            </label>
            <input
              type="number"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              placeholder="Budget *"
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div>
            <label className="block mb-2">Meat:</label>
            {foodItems.slice(0, 7).map((item) => (
              <div key={item.id}>
                <input
                  type="checkbox"
                  id={`food-item-${item.id}`}
                  checked={formData.selectedItems.includes(item.id)}
                  onChange={() => handleCheckboxChange(item.id)}
                  className="mr-2"
                />
                <label htmlFor={`food-item-${item.id}`}>{item.name}</label>
              </div>
            ))}
          </div>

          <div>
            <label className="block mb-2">Sides (max. 2):</label>
            {foodItems.slice(7, 12).map((item) => (
              <div key={item.id}>
                <input
                  type="checkbox"
                  id={`food-item-${item.id}`}
                  checked={formData.selectedItems.includes(item.id)}
                  onChange={() => handleCheckboxChange(item.id)}
                  className="mr-2"
                />
                <label htmlFor={`food-item-${item.id}`}>{item.name}</label>
              </div>
            ))}
          </div>

          <div>
            <label className="block mb-2">Bread:</label>
            {foodItems.slice(12, 14).map((item) => (
              <div key={item.id}>
                <input
                  type="checkbox"
                  id={`food-item-${item.id}`}
                  checked={formData.selectedItems.includes(item.id)}
                  onChange={() => handleCheckboxChange(item.id)}
                  className="mr-2"
                />
                <label htmlFor={`food-item-${item.id}`}>{item.name}</label>
              </div>
            ))}
          </div>

          <div>
            <label className="block mb-2">Drinks (max. 2):</label>
            {foodItems.slice(14, 17).map((item) => (
              <div key={item.id}>
                <input
                  type="checkbox"
                  id={`food-item-${item.id}`}
                  checked={formData.selectedItems.includes(item.id)}
                  onChange={() => handleCheckboxChange(item.id)}
                  className="mr-2"
                />
                <label htmlFor={`food-item-${item.id}`}>{item.name}</label>
              </div>
            ))}
          </div>

          <div>
            <label className="block mb-2">Dessert (max. 2):</label>
            {foodItems.slice(17, 21).map((item) => (
              <div key={item.id}>
                <input
                  type="checkbox"
                  id={`food-item-${item.id}`}
                  checked={formData.selectedItems.includes(item.id)}
                  onChange={() => handleCheckboxChange(item.id)}
                  className="mr-2"
                />
                <label htmlFor={`food-item-${item.id}`}>{item.name}</label>
              </div>
            ))}
          </div>

          <div>
            <label className="block mb-2">Extras:</label>
            {foodItems.slice(21, 25).map((item) => (
              <div key={item.id}>
                <input
                  type="checkbox"
                  id={`food-item-${item.id}`}
                  checked={formData.selectedItems.includes(item.id)}
                  onChange={() => handleCheckboxChange(item.id)}
                  className="mr-2"
                />
                <label htmlFor={`food-item-${item.id}`}>{item.name}</label>
              </div>
            ))}
          </div>

          <ReCAPTCHA
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
            onChange={handleCaptchaChange}
          />

          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
