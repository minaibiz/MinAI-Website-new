import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useModal } from "@/context/ModalContext";

export function BookDemoModal() {
  const { isDemoModalOpen, closeDemoModal } = useModal();

  useEffect(() => {
    if (isDemoModalOpen) {
      const script = document.createElement("script");
      script.src = "https://link.minai.biz/js/form_embed.js";
      script.async = true;
      document.body.appendChild(script);
      return () => {
        document.body.removeChild(script);
      };
    }
  }, [isDemoModalOpen]);

  return (
    <AnimatePresence>
      {isDemoModalOpen && (
        <React.Fragment>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeDemoModal}
            className="fixed inset-0 z-50 bg-black/40 backdrop-blur-md"
          />

          {/* Modal - scrollable container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto py-8 px-4"
          >
            <div className="bg-white rounded-3xl relative premium-shadow border border-black/5 w-full max-w-lg my-auto" onClick={(e) => e.stopPropagation()}>
              {/* Decorative gradient top edge */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary via-blue-400 to-primary opacity-80 z-10 rounded-t-3xl" />

              <button
                onClick={closeDemoModal}
                className="absolute right-4 top-4 rounded-full p-2 text-muted-foreground hover:bg-black/5 hover:text-foreground transition-colors z-20 bg-white/80 backdrop-blur-sm"
                aria-label="Close"
              >
                <X size={20} />
              </button>

              <div className="pt-8">
                <iframe
                  src="https://link.minai.biz/widget/form/WpjN1Xac6B55HNTYUoCl"
                  style={{ width: "100%", height: "1058px", border: "none", borderRadius: "4px" }}
                  id="inline-WpjN1Xac6B55HNTYUoCl"
                  data-layout='{"id":"INLINE"}'
                  data-trigger-type="alwaysShow"
                  data-trigger-value=""
                  data-activation-type="alwaysActivated"
                  data-activation-value=""
                  data-deactivation-type="neverDeactivate"
                  data-deactivation-value=""
                  data-form-name="Website Registration"
                  data-height="1058"
                  data-layout-iframe-id="inline-WpjN1Xac6B55HNTYUoCl"
                  data-form-id="WpjN1Xac6B55HNTYUoCl"
                  title="Website Registration"
                />
              </div>
            </div>
          </motion.div>
        </React.Fragment>
      )}
    </AnimatePresence>
  );
}
