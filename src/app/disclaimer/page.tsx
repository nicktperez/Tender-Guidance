export const metadata = { title: 'Disclaimer' };

export default function DisclaimerPage() {
    return (
        <div className="container mx-auto px-6 py-12 max-w-3xl prose prose-stone">
            <h1>Medical Disclaimer</h1>
            <p><strong>THIS WEBSITE DOES NOT PROVIDE MEDICAL ADVICE.</strong></p>
            <p>
                The information, including but not limited to, text, graphics, images and other material contained on this website are for informational purposes only. No material on this site is intended to be a substitute for professional medical advice, diagnosis or treatment.
            </p>
            <p>
                Always seek the advice of your physician or other qualified health care provider with any questions you may have regarding a medical condition or treatment and before undertaking a new health care regimen, and never disregard professional medical advice or delay in seeking it because of something you have read on this website.
            </p>
            <p>
                If you think you may have a medical emergency, call your doctor or 911 immediately.
            </p>
        </div>
    );
}
