

/**
 * Represents the details of an event.
 */
export interface EventDetails {
  /** Unique identifier for the event */
  id: string;
  /**
   * The name of the event.
   */
  name: string;
  /**
   * A detailed description of the event.
   */
  description: string;
  /**
   * The date and time of the event (ISO string format recommended).
   */
  dateTime: string;
  /**
   * The location where the event will be held.
   */
  location: string;
  /**
   * The maximum number of attendees allowed for the event.
   */
  capacity: number;
  /**
   * The number of attendees currently registered for the event.
   * This count is dynamically updated based on the registrations array.
   */
  registeredAttendees: number;
}

/**
 * Represents a registered attendee with name, email and phone.
 */
export interface AttendeeRegistration { // Exported AttendeeRegistration
  name: string;
  email: string;
  phoneNumber: string;
}

// --- Mock Data Store ---
// In a real app, this would be a database or API call.
export const mockEvents: Record<string, EventDetails> = { // Export mockEvents
  // --- Events Before May 2025 (Marked as full/past) ---
  LitVerse: {
    id: 'litverse-2025',
    name: 'LitVerse',
    description: 'Celebrate the written word with author talks, poetry slams, and book discussions.',
    dateTime: '2025-01-15T10:00:00Z',
    location: 'Arts Faculty Hall',
    capacity: 250,
    registeredAttendees: 250, // Initially set to capacity for past events
  },
  'Canvas Clash': { // Use quotes for names with spaces
    id: 'canvas-clash-2025',
    name: 'Canvas Clash',
    description: 'Unleash your creativity in a live painting and sketching competition.',
    dateTime: '2025-02-01T13:00:00Z',
    location: 'Fine Arts Dept. Courtyard',
    capacity: 80,
    registeredAttendees: 80, // Initially set to capacity for past events
  },
  ShutterFest: {
    id: 'shutterfest-2025',
    name: 'ShutterFest',
    description: 'Capture the essence of DU through your lens. Photography competition and exhibition.',
    dateTime: '2025-02-18T09:00:00Z',
    location: 'Campus Lawns & Various Locations',
    capacity: 120,
    registeredAttendees: 120, // Initially set to capacity for past events
  },
  HackathonX: {
    id: 'hackathonx-2025',
    name: 'HackathonX',
    description: 'A 24-hour coding marathon to build innovative solutions. Prizes and glory await!',
    dateTime: '2025-03-05T17:00:00Z', // Start time
    location: 'Cluster Innovation Centre (CIC)',
    capacity: 150,
    registeredAttendees: 150, // Initially set to capacity for past events
  },
  'Reel Life': {
    id: 'reel-life-2025',
    name: 'Reel Life',
    description: 'Showcase your filmmaking talent. Short film screening and awards.',
    dateTime: '2025-03-20T16:00:00Z',
    location: 'SRCC Auditorium',
    capacity: 400,
    registeredAttendees: 400, // Initially set to capacity for past events
  },
  ChemFusion: {
    id: 'chemfusion-2025',
    name: 'ChemFusion',
    description: 'A symposium exploring the latest advancements in chemical sciences. Guest lectures and paper presentations.',
    dateTime: '2025-04-02T10:30:00Z',
    location: 'Chemistry Department Lecture Hall',
    capacity: 180,
    registeredAttendees: 180, // Initially set to capacity for past events
  },
  'Debate League': {
    id: 'debate-league-2025',
    name: 'Debate League',
    description: 'Witness sharp minds battle with words in the final rounds of the Inter-College Debate League.',
    dateTime: '2025-04-15T14:00:00Z',
    location: 'Conference Centre',
    capacity: 300,
    registeredAttendees: 300, // Initially set to capacity for past events
  },

  // --- Events from May 2025 onwards (Attendee Counts will be synced from registrations) ---
  'Melody Night': {
    id: 'melody-night-2025',
    name: 'Melody Night',
    description: 'An enchanting evening featuring performances by university bands and solo artists.',
    dateTime: '2025-05-10T18:30:00Z',
    location: 'University Amphitheatre',
    capacity: 1000,
    registeredAttendees: 0, // Initial count, will be updated by sync logic
  },
  'Alumni Meet': {
    id: 'alumni-meet-2025',
    name: 'Alumni Meet',
    description: 'Connect with fellow graduates, network, and relive your campus memories.',
    dateTime: '2025-06-15T17:00:00Z',
    location: 'University Guest House Lawns',
    capacity: 400,
    registeredAttendees: 0, // Initial count, will be updated by sync logic
  },
  'Career Fair': {
    id: 'career-fair-2025',
    name: 'Career Fair',
    description: 'Explore job and internship opportunities from leading companies across various sectors.',
    dateTime: '2025-07-10T10:00:00Z',
    location: 'Multipurpose Hall, Sports Complex',
    capacity: 2000, // Larger capacity
    registeredAttendees: 0, // Initial count, will be updated by sync logic
  },
  'Innovation Expo': {
    id: 'innovation-expo-2025',
    name: 'Innovation Expo',
    description: 'Discover groundbreaking projects and startups by DU students and faculty.',
    dateTime: '2025-08-28T11:00:00Z',
    location: 'Convention Hall',
    capacity: 600,
    registeredAttendees: 0, // Initial count, will be updated by sync logic
  },
  THOMDOS: {
    id: 'thomdos-2025',
    name: 'THOMDOS',
    description: 'The annual cultural and technical festival of Delhi University. Featuring competitions, workshops, performances, and more!',
    dateTime: '2025-09-12T10:00:00Z', // Start of festival
    location: 'North Campus Grounds',
    capacity: 500,
    registeredAttendees: 0, // Initial count, will be updated by sync logic
  },
  ROBOMAP: {
    id: 'robomap-2025',
    name: 'ROBOMAP',
    description: 'Witness the clash of titans in the ultimate robotics competition. Build, program, and compete!',
    dateTime: '2025-10-08T09:30:00Z',
    location: 'Engineering Department Labs',
    capacity: 100,
    registeredAttendees: 0, // Initial count, will be updated by sync logic
  },
  COSMIC: {
    id: 'cosmic-2025',
    name: 'COSMIC',
    description: 'Explore the wonders of the universe in this hands-on astronomy workshop. Telescope viewings included!',
    dateTime: '2025-11-15T18:00:00Z',
    location: 'Physics Department Auditorium',
    capacity: 150,
    registeredAttendees: 0, // Initial count, will be updated by sync logic
  },
  BITBOTS: {
    id: 'bitbots-2025',
    name: 'BITBOTS',
    description: 'A fusion of competitive coding challenges and exciting e-sports tournaments. Code, game, conquer!',
    dateTime: '2025-12-05T11:00:00Z',
    location: 'Computer Science Department Hub',
    capacity: 200,
    registeredAttendees: 0, // Initial count, will be updated by sync logic
  },
};


// Store registration details (name, email, and phone) for each event
const registrations: Record<string, AttendeeRegistration[]> = {}; // Changed Set to Array

// Helper function to normalize phone numbers (remove spaces, hyphens, parentheses)
const normalizePhoneNumber = (phone: string): string => {
    return phone.replace(/[\s-()]/g, '');
}

// Generate a random 10-digit phone number string prefixed with +91
const generateRandomPhone = (): string => {
    let phoneDigits = '';
    for (let i = 0; i < 10; i++) {
        phoneDigits += Math.floor(Math.random() * 10);
    }
    // Ensure the first digit after +91 is not 0 for realism (optional)
    if (phoneDigits.startsWith('0')) {
        phoneDigits = (Math.floor(Math.random() * 9) + 1).toString() + phoneDigits.substring(1);
    }
    return `+91${phoneDigits}`;
};

// Sample realistic first names and last names
const firstNames = ["Aarav", "Vivaan", "Aditya", "Vihaan", "Arjun", "Sai", "Reyansh", "Ayaan", "Krishna", "Ishaan", "Saanvi", "Angel", "Pari", "Ananya", "Diya", "Aadhya", "Fatima", "Myra", "Gauri", "Anika", "Rohan", "Vikram", "Aryan", "Kabir", "Advik", "Aisha", "Zara", "Navya", "Siya", "Ishita", "Samar", "Dev", "Rudra", "Zoya", "Meera", "Kavya"];
const lastNames = ["Sharma", "Verma", "Gupta", "Singh", "Kumar", "Patel", "Shah", "Khan", "Ali", "Das", "Reddy", "Joshi", "Mehta", "Desai", "Agarwal", "Malhotra", "Chopra", "Nair", "Menon", "Iyer", "Bhatia", "Kapoor", "Chaudhary", "Jain", "Pandey"];

// Generate a random realistic name
const generateRandomName = (): string => {
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    return `${firstName} ${lastName}`;
}


// Initialize registration arrays and pre-populate for past events first
Object.values(mockEvents).forEach(event => {
    registrations[event.id] = []; // Initialize as empty array first
    // Pre-populate registrations for past events to match the capacity
    const eventDate = new Date(event.dateTime);
    const cutoffDate = new Date('2025-05-01T00:00:00Z'); // May 1st, 2025
    if (eventDate < cutoffDate) {
        const usedEmails = new Set<string>();
        const usedPhones = new Set<string>();

        for(let i = 0; i < event.capacity; i++) {
            let name = generateRandomName();
            let email: string;
            let phone: string;

            // Ensure unique email
            do {
                const emailPrefix = name.toLowerCase().replace(/\s+/g, '.') + Math.floor(Math.random() * 1000); // Increased random factor
                email = `${emailPrefix}@gmail.com`;
            } while (usedEmails.has(email));
            usedEmails.add(email);

             // Ensure unique phone number
            do {
                phone = generateRandomPhone();
            } while (usedPhones.has(phone));
            usedPhones.add(phone);


            registrations[event.id].push({ // Use push for array
                name: name,
                email: email,
                phoneNumber: phone
            });
        }
         // Ensure the registeredAttendees count in mockEvents matches capacity for past events
         mockEvents[event.id] = { ...event, registeredAttendees: event.capacity };
    }
});

// Add some specific pre-registered details for testing upcoming events
registrations['thomdos-2025'].push({ name: 'Priya Singh', email: 'priya.singh@gmail.com', phoneNumber: '+919876543210' });
registrations['thomdos-2025'].push({ name: 'Rahul Kumar', email: 'rahul.kumar@gmail.com', phoneNumber: '+911234567890' });
registrations['robomap-2025'].push({ name: 'Aisha Khan', email: 'aisha.k@gmail.com', phoneNumber: '+919988776655' });
registrations['robomap-2025'].push({ name: 'Vikram Desai', email: 'v.desai@gmail.com', phoneNumber: '+919123451234' });
registrations['career-fair-2025'].push({ name: 'Ananya Sharma', email: 'ananya.sh@gmail.com', phoneNumber: '+919810098100' });
registrations['melody-night-2025'].push({ name: 'Samar Joshi', email: 'samar.j@gmail.com', phoneNumber: '+919717197171' });


// Sync attendee counts for *all* events based on the *current* state of the registrations object
// This ensures upcoming events also have their counts updated based on pre-registrations
Object.keys(mockEvents).forEach(eventKey => {
  const event = mockEvents[eventKey];
  const currentRegistrationsCount = registrations[event.id]?.length || 0;
  // Update the count in mockEvents if it differs from the registrations array length
  if (event.registeredAttendees !== currentRegistrationsCount) {
     mockEvents[eventKey] = { ...event, registeredAttendees: currentRegistrationsCount };
     console.log(`SYNC: Updated attendee count for ${event.name} to ${currentRegistrationsCount}`);
  }
});


// --- Mock API Functions ---

/**
 * Simulates fetching event details with a delay.
 * @param eventName The name of the event.
 * @returns Promise resolving to EventDetails or rejecting if not found.
 */
export async function getEventDetails(eventName: string): Promise<EventDetails> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Find event case-insensitively or handle names with spaces correctly
      const eventKey = Object.keys(mockEvents).find(key => mockEvents[key].name === eventName);
      const event = eventKey ? mockEvents[eventKey] : undefined;

      if (event) {
        // *** IMPORTANT: Return a copy with the count SYNCHRONIZED from the registrations array length ***
        const synchronizedCount = registrations[event.id]?.length || 0;
        if (event.registeredAttendees !== synchronizedCount) {
            console.warn(`Discrepancy found for ${eventName}: mockEvents count (${event.registeredAttendees}) vs registrations length (${synchronizedCount}). Returning synchronized count.`);
        }
        resolve({ ...event, registeredAttendees: synchronizedCount });
      } else {
        reject(new Error(`Event "${eventName}" not found.`));
      }
    }, 500); // Simulate network delay
  });
}

/**
 * Simulates registering a user for an event with checks for name, email and phone number uniqueness per event.
 * @param eventName The name of the event.
 * @param userName The user's name.
 * @param userEmail The user's email.
 * @param userPhoneNumber The user's phone number.
 * @returns Promise resolving to true on success, false on failure (past/duplicate email/duplicate phone/mismatched pair/full).
 */
export async function registerForEvent(
    eventName: string,
    userName: string,
    userEmail: string,
    userPhoneNumber: string
): Promise<boolean> {
   return new Promise((resolve) => { // Changed reject to resolve(false) for easier handling
      setTimeout(() => {
        // Find event case-insensitively or handle names with spaces correctly
        const eventKey = Object.keys(mockEvents).find(key => mockEvents[key].name === eventName);
        let event = eventKey ? mockEvents[eventKey] : undefined;


        if (!event) {
          console.error(`Attempted to register for non-existent event: ${eventName}`);
          return resolve(false);
        }

        // --- Check if event is past ---
        const eventDate = new Date(event.dateTime);
        const cutoffDate = new Date('2025-05-01T00:00:00Z'); // May 1st, 2025
        if (eventDate < cutoffDate) {
            console.log(`Registration failed for ${userName} (${userEmail}) to ${eventName}: Event date has passed.`);
            return resolve(false);
        }
        // --- End Past Event Check ---

        const eventId = event.id;
        if (!registrations[eventId]) {
            registrations[eventId] = []; // Initialize if not present
        }
        const eventRegistrations = registrations[eventId];

        // Check for capacity (using the *current* length of the registrations array)
        // Re-fetch the event details here to get the *absolute latest* count before the check
        // This avoids race conditions if multiple registrations happen nearly simultaneously
        const currentDetails = mockEvents[eventKey!]; // Non-null assertion because we checked event existence
        if (currentDetails.registeredAttendees >= currentDetails.capacity) {
          console.log(`Registration failed for ${userName} (${userEmail}/${userPhoneNumber}) to ${eventName}: Event full (Capacity: ${currentDetails.capacity}, Registered: ${currentDetails.registeredAttendees}).`);
          return resolve(false);
        }

        // Normalize inputs
        const normalizedName = userName.trim();
        const normalizedEmail = userEmail.toLowerCase().trim();
        const normalizedPhone = normalizePhoneNumber(userPhoneNumber);

        // Check for existing registrations with this email or phone number using find
        const emailExists = eventRegistrations.some(existingReg => existingReg.email.toLowerCase().trim() === normalizedEmail);
        const phoneExists = eventRegistrations.some(existingReg => normalizePhoneNumber(existingReg.phoneNumber) === normalizedPhone);


        if (emailExists) {
             console.log(`Registration failed for ${userName} (${userEmail}/${userPhoneNumber}) to ${eventName}: Email '${userEmail}' is already registered for this event.`);
            return resolve(false);
        }

        if (phoneExists) {
             console.log(`Registration failed for ${userName} (${userEmail}/${userPhoneNumber}) to ${eventName}: Phone number '${userPhoneNumber}' is already registered for this event.`);
            return resolve(false);
        }


        // If no conflicts, simulate successful registration
        const newRegistration: AttendeeRegistration = { name: normalizedName, email: userEmail, phoneNumber: userPhoneNumber };
        eventRegistrations.push(newRegistration);

        // Safely update the event count in the mock store
        if (eventKey) {
          // *** IMPORTANT: Update the mockEvents count to reflect the new registration ***
          // Create a new object to ensure state updates are detected
          const updatedEvent = { ...mockEvents[eventKey], registeredAttendees: eventRegistrations.length };
          mockEvents[eventKey] = updatedEvent; // Update using the original key
          console.log(`Successfully registered ${normalizedName} (${userEmail}/${userPhoneNumber}) for ${eventName}. New count: ${updatedEvent.registeredAttendees}`);
          resolve(true);
        } else {
          // This case should ideally not happen if event was found initially
          console.error(`Could not find original key for event ID: ${eventId} during update.`);
          // Rollback registration add
          registrations[eventId] = eventRegistrations.filter(reg => reg !== newRegistration); // Rollback by filtering out the added object
          resolve(false);
        }

      }, 700); // Simulate network delay & processing
   });
}

/**
 * Simulates fetching all registration data.
 * In a real app, this would be a secure endpoint accessible only by admins.
 * @returns Promise resolving to an object where keys are event IDs and values are arrays of registrations.
 */
export async function getAllRegistrations(): Promise<Record<string, AttendeeRegistration[]>> {
    return new Promise((resolve) => {
        setTimeout(() => {
             // Sync counts before returning, ensuring the dashboard gets the latest
             Object.keys(mockEvents).forEach(eventKey => {
                const event = mockEvents[eventKey];
                const currentRegistrationsCount = registrations[event.id]?.length || 0;
                if (event.registeredAttendees !== currentRegistrationsCount) {
                    mockEvents[eventKey] = { ...event, registeredAttendees: currentRegistrationsCount };
                    console.log(`SYNC (getAll): Updated attendee count for ${event.name} to ${currentRegistrationsCount}`);
                }
             });

            // Return a deep copy to prevent modification of the original data
            const registrationsCopy = JSON.parse(JSON.stringify(registrations));
            resolve(registrationsCopy);
        }, 400); // Simulate short delay
    });
}
