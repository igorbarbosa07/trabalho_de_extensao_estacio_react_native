import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  keyboardAvoiding: {
    flex: 1,
  },
  header: {
    backgroundColor: '#5D4037',
    paddingTop: height * 0.05,
    paddingBottom: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#3E2723',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
    flexDirection: 'row',
    position: 'relative',
  },
  headerText: {
    color: 'white',
    fontSize: width < 600 ? 15 : 12,
    fontWeight: 'bold',
    letterSpacing: 1,
    fontFamily: 'serif',
  },
  headerSubText: {
    color: 'white',
    fontSize: width < 400 ? 16 : 18,
    letterSpacing: 1,
    fontFamily: 'serif',
    marginTop: 2,
  },
  logoutButton: {
    position: 'absolute',
    right: 15,
    top: height * 0.05,
  },
  tabs: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingVertical: 5,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  activeTab: {
    backgroundColor: '#5D4037',
    borderRadius: 8,
  },
  tabText: {
    marginTop: 5,
    color: '#555',
    fontSize: width < 400 ? 10 : 12,
  },
  activeTabText: {
    color: '#fff',
  },
  content: {
    flex: 1,
    padding: 15,
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: width < 400 ? 14 : 16,
    marginBottom: 10,
    color: '#5D4037',
  },
  form: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  formTitle: {
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#5D4037',
    fontSize: width < 400 ? 14 : 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 12,
    marginBottom: 12,
    borderRadius: 6,
    fontSize: 15,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 6,
    marginBottom: 12,
  },
  passwordInput: {
    flex: 1,
    padding: 12,
    fontSize: 15,
  },
  eyeButton: {
    padding: 10,
  },
  button: {
    backgroundColor: '#5D4037',
    padding: 14,
    borderRadius: 6,
    alignItems: 'center',
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
  },
  deleteButton: {
    backgroundColor: '#D32F2F',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 12,
  },
  avisoCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderLeftWidth: 4,
    borderLeftColor: '#5D4037',
  },
  avisoHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  avisoTitle: {
    fontSize: width < 400 ? 15 : 17,
    fontWeight: 'bold',
    color: '#333',
    flex: 1,
  },
  avisoDate: {
    fontSize: width < 400 ? 12 : 14,
    color: '#666',
    fontStyle: 'italic',
  },
  avisoDescription: {
    fontSize: width < 400 ? 14 : 15,
    color: '#444',
    lineHeight: 22,
    marginTop: 8,
  },
  formRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  formColumn: {
    width: '48%',
  },
  instructionCard: {
    backgroundColor: '#f8f8f8',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    borderLeftWidth: 4,
    borderLeftColor: '#5D4037',
  },
  messageContainer: {
    position: 'absolute',
    bottom: 70, // Fixed position above the logout button
    left: '25%',
    right: '25%',
    backgroundColor: '#5D4037',
    padding: 10,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  messageContainerWithoutLogout: {
    position: 'absolute',
    bottom: 20, // Lower position when no logout button
    left: '25%',
    right: '25%',
    backgroundColor: '#5D4037',
    padding: 10,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  messageText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 12,
    textAlign: 'center',
  },
  errorText: {
    color: '#D32F2F',
    fontSize: 12,
    marginBottom: 5,
  },
  connectionStatus: {
    position: 'absolute',
    top: 10,
    left: 0,
    right: 0,
    backgroundColor: '#D32F2F',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  connectionStatusText: {
    color: 'white',
    fontWeight: 'bold',
  },
  splashContainer: {
    flex: 1,
    backgroundColor: '#5D4037',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  splashLogo: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 30,
    borderWidth: 3,
    borderColor: 'white',
  },
  splashTitle: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  splashSubtitle: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    opacity: 0.8,
  },
  logoutButtonBottom: {
    backgroundColor: '#5D4037',
    padding: 15,
    borderRadius: 8,
    margin: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  logoutButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 10,
  },
  loadingContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
  },
});