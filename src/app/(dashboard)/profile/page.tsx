import { UploadCloud, Image as ImageIcon, FileText, X, Shield, Eye, EyeOff } from 'lucide-react';

export default function ProfileEditor() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      <header>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Medical Profile</h1>
        <p className="text-foreground/60 mt-1">This information will be visible to first responders when your card is scanned.</p>
      </header>

      <form className="space-y-8">
        
        {/* Personal Details */}
        <div className="glass rounded-2xl p-6 md:p-8">
          <h2 className="text-xl font-semibold mb-6">Personal Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground/80">Full Name</label>
              <input type="text" defaultValue="Sarah Jenkins" className="w-full p-3 rounded-xl border border-border bg-surface focus:ring-2 focus:ring-primary outline-none" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground/80">Date of Birth</label>
              <input type="date" defaultValue="1991-05-14" className="w-full p-3 rounded-xl border border-border bg-surface focus:ring-2 focus:ring-primary outline-none" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground/80">Blood Type</label>
              <select defaultValue="O+" className="w-full p-3 rounded-xl border border-border bg-surface focus:ring-2 focus:ring-primary outline-none">
                <option value="">Select Blood Type</option>
                <option value="A+">A+</option>
                <option value="O+">O+</option>
                <option value="B+">B+</option>
                <option value="AB+">AB+</option>
                <option value="O-">O-</option>
              </select>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground/80">Height (cm)</label>
                <input type="number" defaultValue="165" className="w-full p-3 rounded-xl border border-border bg-surface focus:ring-2 focus:ring-primary outline-none" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground/80">Weight (kg)</label>
                <input type="number" defaultValue="62" className="w-full p-3 rounded-xl border border-border bg-surface focus:ring-2 focus:ring-primary outline-none" />
              </div>
            </div>
            <div className="space-y-2 md:col-span-2">
              <label className="text-sm font-medium text-foreground/80">Home Address</label>
              <input type="text" defaultValue="123 Maple Street, Seattle, WA" className="w-full p-3 rounded-xl border border-border bg-surface focus:ring-2 focus:ring-primary outline-none" />
            </div>
          </div>
        </div>

        {/* Critical Information */}
        <div className="glass rounded-2xl p-6 md:p-8 border-l-4 border-l-alert">
          <h2 className="text-xl font-semibold mb-6 flex items-center gap-2 text-alert">
            Critical Medical Information
          </h2>
          <div className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground/80">Allergies</label>
              <textarea 
                defaultValue="Peanuts (Severe - carries EpiPen)" 
                rows={3} 
                className="w-full p-3 rounded-xl border border-border bg-surface focus:ring-2 focus:ring-alert outline-none"
                placeholder="List any known allergies..."
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground/80">Current Medications</label>
              <textarea 
                defaultValue="Lisinopril 10mg daily" 
                rows={3} 
                className="w-full p-3 rounded-xl border border-border bg-surface focus:ring-2 focus:ring-action outline-none"
                placeholder="List current medications..."
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground/80">Chronic Conditions</label>
              <textarea 
                defaultValue="Hypertension" 
                rows={3} 
                className="w-full p-3 rounded-xl border border-border bg-surface focus:ring-2 focus:ring-primary outline-none"
                placeholder="List chronic conditions..."
              />
            </div>
          </div>
        </div>

        {/* Photos & Medical Reports */}
        <div className="glass rounded-2xl p-6 md:p-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold">Photos & Reports</h2>
            <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">Mocked UI</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Profile Photo Upload */}
            <div className="border-2 border-dashed border-border rounded-2xl p-8 flex flex-col items-center justify-center text-center hover:bg-surface-alt/50 hover:border-primary/50 transition-colors cursor-pointer">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                <ImageIcon className="text-primary" size={24} />
              </div>
              <p className="text-sm font-medium text-foreground">Upload Profile Photo</p>
              <p className="text-xs text-foreground/50 mt-1">PNG, JPG up to 5MB</p>
            </div>

            {/* Medical Reports Upload */}
            <div className="border-2 border-dashed border-border rounded-2xl p-8 flex flex-col items-center justify-center text-center hover:bg-surface-alt/50 hover:border-primary/50 transition-colors cursor-pointer">
              <div className="w-12 h-12 bg-action/10 rounded-full flex items-center justify-center mb-3">
                <FileText className="text-action" size={24} />
              </div>
              <p className="text-sm font-medium text-foreground">Upload Medical Reports</p>
              <p className="text-xs text-foreground/50 mt-1">PDF, DOCX up to 10MB</p>
            </div>
            
          </div>

          {/* Dummy uploaded files list */}
          <div className="mt-6 space-y-3">
            <div className="flex items-center justify-between p-3 rounded-xl border border-border bg-surface-alt">
              <div className="flex items-center gap-3">
                <FileText className="text-action" size={18} />
                <span className="text-sm font-medium">blood_test_results_2023.pdf</span>
              </div>
              <button type="button" className="text-foreground/40 hover:text-alert transition-colors">
                <X size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Privacy & Visibility Controls */}
        <div className="glass rounded-2xl p-6 md:p-8 border-l-4 border-l-action">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold flex items-center gap-2 text-action">
              <Shield size={22} /> Privacy & Visibility
            </h2>
          </div>
          <p className="text-sm text-foreground/70 mb-6">Control what information first responders can see when they scan your emergency card.</p>
          
          <div className="space-y-4">
            
            <label className="flex items-center justify-between p-4 rounded-xl border border-border bg-surface-alt cursor-pointer hover:border-primary/50 transition-colors">
              <div>
                <p className="font-medium text-foreground">Show Medical History</p>
                <p className="text-xs text-foreground/60 mt-1">Allow responders to see your allergies and chronic conditions.</p>
              </div>
              <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-primary transition-colors">
                <span className="inline-block h-4 w-4 translate-x-6 transform rounded-full bg-white transition-transform" />
              </div>
            </label>
            
            <label className="flex items-center justify-between p-4 rounded-xl border border-border bg-surface-alt cursor-pointer hover:border-primary/50 transition-colors">
              <div>
                <p className="font-medium text-foreground">Show Emergency Contacts</p>
                <p className="text-xs text-foreground/60 mt-1">Allow responders to view and call your family members.</p>
              </div>
              <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-primary transition-colors">
                <span className="inline-block h-4 w-4 translate-x-6 transform rounded-full bg-white transition-transform" />
              </div>
            </label>

            <label className="flex items-center justify-between p-4 rounded-xl border border-border bg-surface-alt cursor-pointer hover:border-primary/50 transition-colors opacity-70">
              <div>
                <p className="font-medium text-foreground">Show Medical Reports</p>
                <p className="text-xs text-foreground/60 mt-1">Allow responders to view your uploaded documents.</p>
              </div>
              <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-surface-alt border border-border transition-colors">
                <span className="inline-block h-4 w-4 translate-x-1 transform rounded-full bg-foreground/30 transition-transform" />
              </div>
            </label>
            
          </div>
        </div>

        <div className="flex justify-end pt-4">
          <button type="button" className="px-8 py-3 bg-primary text-white font-medium rounded-xl hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">
            Save Changes
          </button>
        </div>

      </form>
    </div>
  );
}
