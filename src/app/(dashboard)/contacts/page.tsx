import { Phone, Mail, UserPlus, Trash2 } from 'lucide-react';

export default function ContactsEditor() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Emergency Contacts</h1>
          <p className="text-foreground/60 mt-1">These contacts will be notified automatically when your card is scanned.</p>
        </div>
        <button className="px-6 py-2 bg-action text-white rounded-lg font-medium hover:bg-action/90 transition-colors shadow-sm flex items-center gap-2">
          <UserPlus size={18} />
          Add Contact
        </button>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Contact Card 1 */}
        <div className="glass rounded-2xl p-6 border border-border relative overflow-hidden group">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="font-semibold text-lg">Mark Jenkins</h3>
              <p className="text-sm text-action font-medium">Husband</p>
            </div>
            <button className="text-foreground/40 hover:text-alert transition-colors">
              <Trash2 size={18} />
            </button>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-foreground/80">
              <Phone size={16} className="text-foreground/40" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center gap-3 text-foreground/80">
              <Mail size={16} className="text-foreground/40" />
              <span>mark.j@example.com</span>
            </div>
          </div>
        </div>

        {/* Contact Card 2 */}
        <div className="glass rounded-2xl p-6 border border-border relative overflow-hidden group">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="font-semibold text-lg">Emily Davis</h3>
              <p className="text-sm text-action font-medium">Sister</p>
            </div>
            <button className="text-foreground/40 hover:text-alert transition-colors">
              <Trash2 size={18} />
            </button>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-foreground/80">
              <Phone size={16} className="text-foreground/40" />
              <span>+1 (555) 987-6543</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
