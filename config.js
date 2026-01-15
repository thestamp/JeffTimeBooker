/**
 * JeffTimeBooker Configuration
 * Customize these settings to personalize the booking site
 */

const CONFIG = {
  ownerName: "Jeff",
  ownerEmail: "",
  companyName: "The University of Winnipeg",
  timezone: "America/Chicago",
  rejectionIntensity: "normal", // "mild", "normal", "savage"
  
  // Processing delays (in milliseconds)
  bookingProcessingDelay: 3000, // 3 seconds
  aiAnalysisDelay: 2500,        // 2.5 seconds
  
  // Booking Rejection Reasons (randomly selected)
  rejectionReasons: [
    "Unfortunately, that time conflicts with Jeff's daily coffee ritual (non-negotiable).",
    "Availability constraints detected: Jeff has scheduled this slot for strategic thinking.",
    "This time slot is reserved for focused work. Your meeting doesn't meet the priority threshold.",
    "System analysis indicates this timeslot was specifically blocked to prevent situations like this.",
    "That time overlaps with Jeff's 'deep focus' time. No exceptions, except actual emergencies.",
    "Calendar conflict: Jeff is scheduled to do literally anything else at that time.",
    "This time slot is cordoned off for maximum productivity. Your meeting would decrease efficiency.",
    "Access denied: You have not provided a compelling enough reason for this time.",
    "System error: A scheduling deity has ordained that this time is not for you.",
    "That time is currently reserved for Jeff's important internal meetings (with himself)."
  ],

  // Booking Processing Details (randomly selected during processing)
  processingDetails: [
    "Scanning 247 calendar entries...",
    "Cross-referencing timezone conflicts...",
    "Checking priority filters...",
    "Validating meeting criteria...",
    "Synchronizing with AI calendar..."
  ],

  // AI Analysis Results (randomly selected after appeal analysis)
  aiAnalysisResults: [
    "After careful analysis, your appeal demonstrates 73% sincerity, but Jeff's schedule analysis indicates a 0% probability of availability for this time slot. Recommendation: DENY",
    "Your request prioritizes short-term scheduling convenience over Jeff's long-term productivity goals. While your reasoning is valid, system constraints prevent approval. Recommendation: REJECT",
    "The AI has detected that this time block was specifically blocked to prevent this exact situation. Your appeal, though compelling, cannot override scheduled protection measures. Recommendation: REJECT",
    "Sentiment analysis suggests genuine need, but the temporal barrier is insurmountable. This meeting violates Jeff's carefully calibrated schedule matrix. Recommendation: DENY",
    "Your appeal shows strong communication skills and legitimate need, but crosses the temporal threshold that Jeff has deemed sacred. Recommendation: REJECT",
    "The system recognizes your urgency (85th percentile), but unfortunately this is Jeff's meditation time. No appeals are processed during meditation. Recommendation: REJECT",
    "Your reasoning is sound, your need is real, but the universe has aligned against this particular timeslot. Recommendation: DENY",
    "After 47 microseconds of analysis, the AI concludes: still no. Recommendation: REJECT",
    "Your appeal invokes emotional triggers (92% detected), but Jeff's schedule operates on pure logic. The answer remains no. Recommendation: DENY",
    "The neural network has spoken: absolutely not. This time is protected by forces beyond human comprehension. Recommendation: REJECT"
  ],

  // AI Confidence Scores (randomly selected with analysis result)
  confidenceScores: [
    "99.2%",
    "99.7%",
    "99.9%",
    "100%",
    "99.8%"
  ]
};
