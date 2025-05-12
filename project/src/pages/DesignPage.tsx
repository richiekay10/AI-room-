import React, { useState } from 'react';
import { Upload, X, Loader2, ImageIcon, Wand2 } from 'lucide-react';
import RoomStyleSelector from '../components/RoomStyleSelector';
import { cn } from '../lib/utils';
import { toast } from '../components/ui/Toast';
import { beforeAfterPairs } from '../constants/sampleImages';

// Sample room styles
const roomStyles = [
  { id: 'modern', name: 'Modern', description: 'Clean lines, minimalist, neutral colors' },
  { id: 'minimalist', name: 'Minimalist', description: 'Simplicity, functionality, less is more' },
  { id: 'scandinavian', name: 'Scandinavian', description: 'Light, airy, natural elements' },
  { id: 'industrial', name: 'Industrial', description: 'Raw materials, exposed elements, urban feel' },
  { id: 'luxury', name: 'Luxury', description: 'Opulent, rich textures, premium finishes' },
  { id: 'coastal', name: 'Coastal', description: 'Beach-inspired, light blues, relaxed' },
  { id: 'bohemian', name: 'Bohemian', description: 'Eclectic, global influences, colorful' },
  { id: 'traditional', name: 'Traditional', description: 'Classic, timeless, elegant details' },
];

// Sample room types
const roomTypes = [
  { id: 'living-room', name: 'Living Room' },
  { id: 'bedroom', name: 'Bedroom' },
  { id: 'kitchen', name: 'Kitchen' },
  { id: 'bathroom', name: 'Bathroom' },
  { id: 'office', name: 'Home Office' },
  { id: 'dining', name: 'Dining Room' },
];

const DesignPage = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [selectedStyle, setSelectedStyle] = useState<string | null>(null);
  const [selectedRoomType, setSelectedRoomType] = useState<string | null>(null);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    handleImageUpload(file);
  };

  const handleImageUpload = (file?: File) => {
    if (!file) return;

    // Check if file is an image
    if (!file.type.match('image.*')) {
      toast({
        title: 'Invalid file type',
        description: 'Please upload an image file (jpg, png, etc.)',
        variant: 'destructive',
      });
      return;
    }

    setIsUploading(true);
    
    // Simulate upload delay
    setTimeout(() => {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string);
        setIsUploading(false);
      };
      reader.readAsDataURL(file);
    }, 1500);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    handleImageUpload(file);
  };

  const resetUpload = () => {
    setSelectedImage(null);
    setGeneratedImage(null);
    setSelectedStyle(null);
    setSelectedRoomType(null);
  };

  const generateDesign = () => {
    if (!selectedImage || !selectedStyle || !selectedRoomType) {
      toast({
        title: 'Missing information',
        description: 'Please upload an image and select both room type and style',
        variant: 'destructive',
      });
      return;
    }

    setIsGenerating(true);

    // Simulate AI processing delay
    setTimeout(() => {
      // Find a random before/after pair as our "generated" result
      const randomIndex = Math.floor(Math.random() * beforeAfterPairs.length);
      setGeneratedImage(beforeAfterPairs[randomIndex].after);
      setIsGenerating(false);
      
      toast({
        title: 'Design generated!',
        description: 'Your new room design is ready to view',
      });
    }, 3000);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Design Your Room</h1>
        <p className="mt-4 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
          Upload a photo of your room, select your desired style, and let our AI transform your space.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left side - Upload and options */}
        <div className="flex flex-col space-y-6">
          {!selectedImage ? (
            <div 
              className={cn(
                "border-2 border-dashed rounded-xl h-80 flex items-center justify-center cursor-pointer transition-all",
                isDragging 
                  ? "border-indigo-500 bg-indigo-50 dark:bg-indigo-950/30" 
                  : "border-slate-300 dark:border-slate-700 hover:border-indigo-400 dark:hover:border-indigo-600"
              )}
              onClick={() => document.getElementById('file-upload')?.click()}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              <input 
                id="file-upload" 
                type="file" 
                accept="image/*" 
                className="hidden" 
                onChange={handleFileChange} 
              />
              
              {isUploading ? (
                <div className="text-center">
                  <Loader2 className="h-10 w-10 text-indigo-600 animate-spin mx-auto" />
                  <p className="mt-2 text-slate-600 dark:text-slate-400">Uploading your image...</p>
                </div>
              ) : (
                <div className="text-center p-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-indigo-100 dark:bg-indigo-900/50 rounded-full flex items-center justify-center">
                    <Upload className="h-8 w-8 text-indigo-600" />
                  </div>
                  <p className="text-lg font-medium text-slate-900 dark:text-white">Drag & drop your room photo</p>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">or click to browse</p>
                  <p className="mt-4 text-xs text-slate-500 dark:text-slate-500 max-w-xs mx-auto">
                    Supports JPG, PNG. For best results, use a photo with good lighting and a clear view of the room.
                  </p>
                </div>
              )}
            </div>
          ) : (
            <div className="relative rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800 h-80">
              <img 
                src={selectedImage} 
                alt="Uploaded room" 
                className="w-full h-full object-cover"
              />
              <button 
                onClick={resetUpload}
                className="absolute top-3 right-3 bg-slate-900/70 hover:bg-slate-900 text-white p-1.5 rounded-full"
              >
                <X className="h-4 w-4" />
              </button>
              <div className="absolute bottom-0 left-0 right-0 bg-slate-900/70 text-white py-2 px-4 flex justify-between items-center">
                <span className="text-sm">Your room</span>
                <button 
                  onClick={resetUpload}
                  className="text-xs text-slate-300 hover:text-white underline"
                >
                  Change photo
                </button>
              </div>
            </div>
          )}

          {selectedImage && (
            <>
              <div className="rounded-xl bg-white dark:bg-slate-800 p-6 shadow-sm">
                <h2 className="text-lg font-medium text-slate-900 dark:text-slate-100 mb-4">Room Type</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {roomTypes.map((roomType) => (
                    <button
                      key={roomType.id}
                      className={cn(
                        "py-2 px-3 rounded-lg text-sm font-medium transition-all border",
                        selectedRoomType === roomType.id
                          ? "bg-indigo-100 dark:bg-indigo-900/50 border-indigo-300 dark:border-indigo-700 text-indigo-800 dark:text-indigo-200"
                          : "bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-indigo-300 dark:hover:border-indigo-700"
                      )}
                      onClick={() => setSelectedRoomType(roomType.id)}
                    >
                      {roomType.name}
                    </button>
                  ))}
                </div>
              </div>

              <div className="rounded-xl bg-white dark:bg-slate-800 p-6 shadow-sm">
                <h2 className="text-lg font-medium text-slate-900 dark:text-slate-100 mb-4">Select Room Style</h2>
                <RoomStyleSelector 
                  styles={roomStyles} 
                  selectedStyle={selectedStyle}
                  onSelectStyle={setSelectedStyle}
                />
              </div>

              <button
                className={cn(
                  "flex items-center justify-center py-3 px-6 rounded-xl font-medium gap-2 transition-all",
                  (selectedStyle && selectedRoomType)
                    ? "bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg hover:shadow-xl hover:shadow-indigo-200 dark:hover:shadow-indigo-900/30"
                    : "bg-slate-200 dark:bg-slate-800 text-slate-500 dark:text-slate-400 cursor-not-allowed"
                )}
                disabled={!selectedStyle || !selectedRoomType || isGenerating}
                onClick={generateDesign}
              >
                {isGenerating ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" /> 
                    Generating design...
                  </>
                ) : (
                  <>
                    <Wand2 className="h-5 w-5" /> 
                    Generate Room Design
                  </>
                )}
              </button>
            </>
          )}
        </div>

        {/* Right side - Result display */}
        <div className="flex flex-col space-y-6">
          {isGenerating ? (
            <div className="border-2 border-slate-200 dark:border-slate-700 rounded-xl h-80 flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-900">
              <Loader2 className="h-12 w-12 text-indigo-600 animate-spin" />
              <p className="mt-4 text-lg font-medium text-slate-900 dark:text-slate-100">Generating your design</p>
              <div className="mt-6 w-64 h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                <div className="h-full bg-indigo-600 rounded-full animate-progress"></div>
              </div>
              <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
                Our AI is hard at work reimagining your space...
              </p>
            </div>
          ) : generatedImage ? (
            <div className="rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800 h-80 relative">
              <img 
                src={generatedImage} 
                alt="Generated room design" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-slate-900/70 text-white py-2 px-4 flex justify-between items-center">
                <span className="text-sm">AI redesigned room</span>
                <button 
                  className="text-xs text-white bg-indigo-600 hover:bg-indigo-700 py-1 px-2 rounded"
                  onClick={() => window.open(generatedImage, '_blank')}
                >
                  View full size
                </button>
              </div>
            </div>
          ) : (
            <div className="border-2 border-slate-200 dark:border-slate-700 border-dashed rounded-xl h-80 flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-900">
              <div className="w-16 h-16 bg-slate-200 dark:bg-slate-800 rounded-full flex items-center justify-center">
                <ImageIcon className="h-8 w-8 text-slate-400 dark:text-slate-600" />
              </div>
              <p className="mt-4 text-slate-500 dark:text-slate-400">
                Your redesigned room will appear here
              </p>
            </div>
          )}

          {generatedImage && (
            <div className="rounded-xl bg-white dark:bg-slate-800 p-6 shadow-sm">
              <h2 className="text-lg font-medium text-slate-900 dark:text-slate-100 mb-4">Additional Styles</h2>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                Love your redesign? Generate more styles to compare options.
              </p>
              <div className="grid grid-cols-2 gap-3">
                <button
                  className="py-2 px-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-medium hover:border-indigo-300 dark:hover:border-indigo-700 transition-all"
                  onClick={() => {
                    setSelectedStyle('minimalist');
                    generateDesign();
                  }}
                >
                  Try Minimalist
                </button>
                <button
                  className="py-2 px-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-medium hover:border-indigo-300 dark:hover:border-indigo-700 transition-all"
                  onClick={() => {
                    setSelectedStyle('luxury');
                    generateDesign();
                  }}
                >
                  Try Luxury
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DesignPage;